import { keyOrIndex, toObject } from "../array";

describe("[UNIT] keyOrIndex", () => {
  test("Returns key and value when used in a map function", () => {
    const mapper = keyOrIndex(["a", "b", "c"]);
    const result = mapper("value", 1);
    expect(result).toEqual(["b", "value"]);
  });

  test("Returns key and value", () => {
    const expected = [
      ["a", null],
      ["b", 2],
      ["c", 3],
      ["[3]", 4],
    ];

    const mapper = keyOrIndex(["a", "b", "c"]);
    const result = [null, 2, 3, 4].map(mapper);
    expect(result).toEqual(expected);
  });

  test("Returns index and value if theres no key for given index", () => {
    const mapper = keyOrIndex(["a"]);
    const result = mapper("value", 2);
    expect(result).toEqual(["[2]", "value"]);
  });

  test("Returns indexes if no key was provided", () => {
    const mapper = keyOrIndex();
    const result = mapper("value", 0);
    expect(result).toEqual(["[0]", "value"]);
  });
});

describe("[UNIT] toObject", () => {
  it("should add a key-value pair to the object", () => {
    const obj = { foo: "bar" };
    const result = toObject(obj, ["baz", "qux"]);

    expect(result).toEqual({ foo: "bar", baz: "qux" });
  });
});
