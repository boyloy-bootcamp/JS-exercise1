const findSecondLargestElement = require("../exercises/second_largest_element");

describe("findSecondLargestElement", () => {
  it("should be a function", () => {
    expect(typeof findSecondLargestElement).toBe("function");
  });

  it("should return the second largest element in an array", () => {
    expect(findSecondLargestElement([3, 5, 1, 8, 10, 2])).toBe(8);
  });

  it("should return undefined for an array with less than 2 elements", () => {
    expect(findSecondLargestElement([1])).toBeUndefined();
  });

  it("should handle negative numbers", () => {
    expect(findSecondLargestElement([-1, -2, -3, -4])).toBe(-2);
  });
});
