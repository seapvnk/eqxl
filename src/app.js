import Koa from "koa";
import json from "koa-json";
import bodyParser from "koa-bodyparser";

import errorMiddleware from "./middlewares/error.middleware";

import { router } from "./routes";

const app = new Koa();

app.use(json());
app.use(bodyParser());
app.use(errorMiddleware);

app.use(router.routes());

export default app;
