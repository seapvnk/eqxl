import Router from "koa-router";
import scriptRoutes from "./script.routes";

export const router = new Router();

router.use(scriptRoutes.routes());
