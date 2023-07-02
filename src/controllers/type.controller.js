import { createTypeService } from "../services/type.service";

const createTypeController = async (ctx) => {
  ctx.response.status = 201;
  ctx.body = {
    type: await createTypeService(ctx.request.body),
  };
};

export default {
  createTypeController,
};
