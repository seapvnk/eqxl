import {
  createTypeRepository,
  deleteTypeRepository,
  getOneTypeRepository,
  getTypesRepository,
  updateTypeRepository,
} from "../repositories/type.repository";

export const createTypeService = (type) => createTypeRepository(type);

export const updateTypeService = (id, type) => updateTypeRepository(id, type);

export const deleteTypeService = (id) => deleteTypeRepository(id);

export const getOneTypeService = (id) => getOneTypeRepository(id);

export const getTypesService = () => getTypesRepository();

export default {
  createTypeService,
  updateTypeService,
  deleteTypeService,
  getOneTypeService,
  getTypesService,
};
