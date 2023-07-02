import { exec } from "@jcubic/lips";
import { keyOrIndex, toObject } from "../helpers/array";

export const mappedExec = async ({ mapping, script, take }) => {
  const results = await exec(script);
  return results
    .slice(results.length - take, results.length)
    .map(keyOrIndex(mapping))
    .reduce(toObject, {});
};

export default {
  mappedExec,
};
