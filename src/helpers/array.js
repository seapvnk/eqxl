export const keyOrIndex =
  (keys = []) =>
  (element, index) =>
    index < keys.length ? [keys[index], element] : [`[${index}]`, element];

export const toObject = (obj, [a, b]) => {
  obj[typeof a === "string" ? a : JSON.stringify(a)] = b;
  return obj;
};
