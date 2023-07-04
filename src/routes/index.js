import Router from "koa-router";
import scriptRoutes from "./script.routes";
import typeRoutes from "./type.routes";
import documentRoutes from "./document.routes";

export const router = new Router();

router.use(scriptRoutes.routes());
router.use(typeRoutes.routes());
router.use(typeRoutes.routes());
router.use(documentRoutes.routes());
