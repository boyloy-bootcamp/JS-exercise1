const factorial = require("../exercises/factorial");

describe("factorial", () => {
  it("should be a function", () => {
    expect(typeof factorial).toBe("function");
  });

  it("should return 1 for input 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 for input 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return the correct factorial for a number", () => {
    expect(factorial(5)).toBe(120);
  });

  it("should return the correct factorial for a large number", () => {
    expect(factorial(10)).toBe(3628800);
  });
});
