import Router from "koa-router";
import scriptController from "../controllers/script.controller";

const scriptRoutes = new Router();

scriptRoutes.post("/script", scriptController.runScript);

export default scriptRoutes;
