const { createTypeRepository } = require("../repositories/type.repository");

export const createTypeService = (type) => createTypeRepository(type);

export default {
  createTypeService,
};
