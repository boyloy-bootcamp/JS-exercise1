const charOccurrence = require("../exercises/char_occurance");

describe("charOccurrence", () => {
  it("should be a function", () => {
    expect(typeof charOccurrence).toBe("function");
  });

  it("should return the correct occurrence of each character in a string", () => {
    expect(charOccurrence("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  });

  it("should return an empty object for an empty string", () => {
    expect(charOccurrence("")).toEqual({});
  });

  it("should be case sensitive", () => {
    expect(charOccurrence("Hello")).toEqual({ H: 1, e: 1, l: 2, o: 1 });
  });
});
