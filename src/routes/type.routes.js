import Router from "koa-router";
import typeController from "../controllers/type.controller";

const typeRoutes = new Router();
typeRoutes.post("/types", typeController.createTypeController);

export default typeRoutes;
