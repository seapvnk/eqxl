import knex from "../config/db";

export const createDocument = async (name, objects) => {
  try {
    const document = await knex.transaction(async (trx) => {
      const [createdDocument] = await trx("document")
        .insert({ name })
        .returning("*");

      const objectIds = await Promise.all(
        objects.map(async (object) => {
          const [objectId] = await trx("object")
            .insert({
              ...object,
              document_id: createdDocument.id,
            })
            .returning("id");

          await trx("object_type").insert({
            object_id: objectId,
            type_id: object.typeId,
          });

          return objectId;
        })
      );

      createdDocument.objects = objectIds;
      return createdDocument;
    });

    return document;
  } catch (error) {
    throw new Error(`Failed to create document: ${error.message}`);
  }
};
