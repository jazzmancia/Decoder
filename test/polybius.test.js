const {polybius} = require("../src/polybius");
const expect = require("chai").expect; 

describe ("polybius", () => {
  it ("encoding: should translate letters i and j to 42", () => {
    let expected = polybius("thinkful");
    let actual = "4432423352125413";
    expect(actual).to.eql(expected);
  })
  
  it("decoding: translate 42 to (i/j)", () => {
    let expected = polybius("4432423352125413", false);
    let actual = "th(i/j)nkful";
    expect(actual).to.eql(expected);
  })
  
  it("should ignore capital letters", () => {
    let expected = polybius("Hello world");
    let actual = "3251131343 2543241341";
    expect(actual).to.eql(expected);
  })
  
  it("encoding: should maintain spaces in the message", () => {
    let expected = polybius("Hello world");
    let actual = "3251131343 2543241341";
    expect(actual).to.eql(expected);
  })
  
  it("decoding: should maintain spaces in the message", () => {
    let expected = polybius("3251131343 2543241341", false);
    let actual = "hello world";
    expect(actual).to.eql(expected);
  })
})