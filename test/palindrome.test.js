const isPalindrome = require("../exercises/palindrome");

describe("isPalindrome", () => {
  it("should be a function", () => {
    expect(typeof isPalindrome).toBe("function");
  });

  it("should return true for a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should return false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("should return true for a palindrome phrase", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });
});
