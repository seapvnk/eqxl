import Router from "koa-router";
import scriptRoutes from "./script.routes";
import typeRoutes from "./type.routes";

export const router = new Router();

router.use(scriptRoutes.routes());
router.use(typeRoutes.routes());
