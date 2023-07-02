import Router from "koa-router";
import typeController from "../controllers/type.controller";

const typeRoutes = new Router();

typeRoutes.post("/types", typeController.createTypeController);

typeRoutes.patch("/types/:id", typeController.updateTypeController);

typeRoutes.get("/types/:id", typeController.getOneTypeController);

typeRoutes.delete("/types/:id", typeController.deleteTypeController);

typeRoutes.get("/types", typeController.getTypesController);

export default typeRoutes;
