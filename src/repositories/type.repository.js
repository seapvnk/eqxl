import knex from "../config/db";
import { v4 as uuidv4 } from "uuid";

export const createTypeRepository = async (type) => {
  try {
    const [createdType] = await knex("type")
      .insert({ ...type, id: uuidv4() })
      .returning("*");

    return createdType;
  } catch (error) {
    throw new Error(`Failed to create type: ${error.message}`);
  }
};

export const updateTypeRepository = async (id, type) => {
  try {
    const updatedType = await knex("type")
      .where({ id })
      .update(type)
      .returning("*");

    if (!updatedType) {
      throw new Error("Type not found");
    }

    return updatedType;
  } catch (error) {
    throw new Error(`Failed to update type: ${error.message}`);
  }
};

export const deleteTypeRepository = (id) => knex("type").where({ id }).del();

export const getOneTypeRepository = (id) => knex("type").where({ id });

export const getTypesRepository = () => knex("type").select("*");

export default {
  createTypeRepository,
  updateTypeRepository,
  getTypesRepository,
  deleteTypeRepository,
};
