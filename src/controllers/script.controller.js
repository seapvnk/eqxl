import { mappedExec } from "../services/script.service";

const runScript = async (ctx) => {
  ctx.response.status = 200;
  ctx.body = {
    results: await mappedExec(ctx.request.body),
  };
};

export default {
  runScript,
};
