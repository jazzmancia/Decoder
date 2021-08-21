const {substitution} = require("../src/substitution");
const expect = require("chai").expect; 

describe("substitution", () => {
  it ("should return false if the given alphabet isn't exactly 26 characters long", () => {
    let expected = substitution("string", "short");
    let actual = false;
    expect(actual).to.eql(expected);
  })
  
  it("should correctly translate given phrase based on alphabet argument", () => {
    let expected = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    let actual = "elp xhm xf mbymwwmfj dne"
    expect(actual).to.eql(expected);
  })
  
  it("should return false if there are any duplicate characters in the given alphabet", () => {
    let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    let expected = false;
    expect(actual).to.eql(expected);
  })
  
  it("should ignore capital letters", () => {
    let actual = substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev");
    let expected = "jrufscpw"
    expect(actual).to.eql(expected);
  })
})