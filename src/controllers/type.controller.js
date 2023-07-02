import {
  createTypeService,
  deleteTypeService,
  getOneTypeService,
  getTypesService,
  updateTypeService,
} from "../services/type.service";

const createTypeController = async (ctx) => {
  ctx.response.status = 201;
  ctx.body = {
    type: await createTypeService(ctx.request.body),
  };
};

const updateTypeController = async (ctx) => {
  ctx.response.status = 200;
  ctx.body = {
    type: await updateTypeService(ctx.params.id, ctx.request.body),
  };
};

const deleteTypeController = async (ctx) => {
  ctx.response.status = 200;
  ctx.body = {
    types: await deleteTypeService(ctx.params.id),
  };
};

const getOneTypeController = async (ctx) => {
  ctx.response.status = 200;
  ctx.body = {
    types: await getOneTypeService(ctx.params.id),
  };
};

const getTypesController = async (ctx) => {
  ctx.response.status = 200;
  ctx.body = {
    types: await getTypesService(),
  };
};

export default {
  createTypeController,
  updateTypeController,
  deleteTypeController,
  getOneTypeController,
  getTypesController,
};
