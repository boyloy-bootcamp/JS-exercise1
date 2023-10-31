const fizzBuzz = require("../exercises/fizz_buzz");
describe("fizzBuzz", () => {
  let consoleLog;

  beforeEach(() => {
    consoleLog = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleLog.mockRestore();
  });

  it("should be a function", () => {
    expect(typeof fizzBuzz).toBe("function");
  });

  it("should print the correct values", () => {
    fizzBuzz(15);
    expect(consoleLog).toHaveBeenCalledWith(1);
    expect(consoleLog).toHaveBeenCalledWith(2);
    expect(consoleLog).toHaveBeenCalledWith("Fizz");
    expect(consoleLog).toHaveBeenCalledWith(4);
    expect(consoleLog).toHaveBeenCalledWith("Buzz");
    expect(consoleLog).toHaveBeenCalledWith("Fizz");
    expect(consoleLog).toHaveBeenCalledWith(7);
    expect(consoleLog).toHaveBeenCalledWith(8);
    expect(consoleLog).toHaveBeenCalledWith("Fizz");
    expect(consoleLog).toHaveBeenCalledWith("Buzz");
    expect(consoleLog).toHaveBeenCalledWith(11);
    expect(consoleLog).toHaveBeenCalledWith("Fizz");
    expect(consoleLog).toHaveBeenCalledWith(13);
    expect(consoleLog).toHaveBeenCalledWith(14);
    expect(consoleLog).toHaveBeenCalledWith("FizzBuzz");
  });
});
