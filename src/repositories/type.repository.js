import knex from "../config/db";

export const createTypeRepository = async (type) => {
  try {
    const [createdType] = await knex("type")
      .insert({ ...type })
      .returning("*");

    return createdType;
  } catch (error) {
    throw new Error(`Failed to create type: ${error.message}`);
  }
};

export default {
  createTypeRepository,
};
