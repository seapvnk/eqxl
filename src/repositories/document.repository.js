import knex from "../config/db";
import { v4 as uuidv4 } from "uuid";

export const createDocumentRepository = async ({ name, objects }) => {
  try {
    const document = await knex.transaction(async (trx) => {
      const [createdDocument] = await trx("document")
        .insert({ id: uuidv4(), name })
        .returning("*");

      const objectIds = await Promise.all(
        objects.map(async ({ value, type_id }, index) => {
          const [{ id: objectId }] = await trx("object")
            .insert({
              id: uuidv4(),
              document_id: createdDocument.id,
              value,
              index,
            })
            .returning("id");

          await trx("object_type").insert({
            object_id: objectId,
            type_id,
          });

          return objectId;
        })
      );

      return {
        ...createdDocument,
        objects: objectIds.map((id) => ({ id })),
      };
    });

    return document;
  } catch (error) {
    throw new Error(`Failed to create document: ${error.message}`);
  }
};

export const deleteDocumentRepository = (id) =>
  knex("document").where({ id }).del();

export const getOneDocumentRepository = (id) => knex("document").where({ id });

export const getDocumentsRepository = () =>
  knex("document").select('*')