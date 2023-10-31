const findLongestWord = require("../exercises/longest_word");

describe("findLongestWord", () => {
  it("should be a function", () => {
    expect(typeof findLongestWord).toBe("function");
  });

  it("should return the longest word in a sentence", () => {
    expect(
      findLongestWord("The quick brown fox jumped over the lazy dog")
    ).toBe("jumped");
  });

  it("should return the first longest word in a sentence if there are multiple", () => {
    expect(
      findLongestWord("The quick brown fox jumps over the lazy dogs")
    ).toBe("quick");
  });

  it("should return an empty string for an empty sentence", () => {
    expect(findLongestWord("")).toBe("");
  });
});
