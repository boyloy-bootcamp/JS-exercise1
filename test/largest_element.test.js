const findLargestElement = require("../exercises/largest_element");

describe("findLargestElement", () => {
  it("should be a function", () => {
    expect(typeof findLargestElement).toBe("function");
  });

  it("should return the largest element in an array", () => {
    expect(findLargestElement([3, 5, 1, 8, 10, 2])).toBe(10);
  });

  it("should return -Infinity for an empty array", () => {
    expect(findLargestElement([])).toBe(-Infinity);
  });
});
