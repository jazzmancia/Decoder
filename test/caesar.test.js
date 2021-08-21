/* Write your tests here!
-- spaces should be maaintained throughout as should other non-alphabetic symbols
-- tolowercase
-- if a letter is shifted so that it goes "off" the alphabet 
*/
const {caesar} = require("../src/caesar");
const expect = require("chai").expect; 

describe ("caesar", () => {
  
  it ("should return an encrypted or decrypted string", () => {
    let expected = "bpqa qa i amkzmb umaaiom!";
    let actual = caesar("This is a secret message!", 8, encode = true);
    expect(actual).to.eql(expected);
  })
  
  it ("should return false if the shift value is equal to 0", () => {
    let expected = false;
    let actual = caesar("string", 0);
    expect(actual).to.eql(expected);
  })
  
  it("should return false if shift value is not defined", () => {
    let expected = false;
    let actual = caesar("string");
    expect(actual).to.eql(expected);
  })
  
  it("should return false if shift value is less than -25", () => {
    let expected = false;
    let actual = caesar("string", -26);
    expect(actual).to.eql(expected);
  })
  
  it("should return false if shift value is more than 25", () => {
    let expected = false;
    let actual = caesar("string", 26);
    expect(actual).to.eql(expected);
  })
  
  it("encoding: should maintain spaces and non-alphabetic symbols", () => {
    let expected = "bpqa qa i amkzmb umaaiom!";
    let actual = caesar("This is a secret message!", 8, encode = true);
    expect(actual).to.eql(expected);
  })
  
  it("decoding: should maintain spaces and non-alphabetic symbols", () => {
    let expected = "this is a secret message!";
    let actual = caesar("Bpqa qa i amkzmb umaaiom!", 8, encode = false);
    expect(actual).to.eql(expected);
  })
  
  it("should handle shifts that go past the end of the alphabet", () => {
    let expected = "ccc";
    let actual = caesar("zzz", 3);
    expect(actual).to.eql(expected);
  })
  
  it("should ignore capital letters", () => {
    let expected = caesar("HELLO WORLD", 4);
    let actual = caesar("hello world", 4);
    expect(actual).to.eql(expected);
  })
})
