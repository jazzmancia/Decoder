// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    let result = "";
    // return false if shift is not present, equals zero, is greater than 25 or less than -25
    if (!shift || shift === 0 || shift > 25 || shift < -25) { return false};
    
    //if statement for decoding, flipping the shift value to its negative
    if (!encode) shift *= -1;
    
    for (let i = 0; i < input.length; i++){
      
      //declare char value to hold iterated input character and transform to lowercase 
      let char = input[i].toLowerCase();
      //maintains spaces and other nonalphabetic symbols in the message
      let index = alphabet.indexOf(char)
      if (index === -1) {
        result += char;
      } else {
        let newIndex = index + shift;
        if (newIndex < 0) newIndex += 26;
        
        //handles shifts that go past the end of the alphabet
        if (newIndex > 25) newIndex %= 26;
        let newChar = alphabet.charAt(newIndex)
        result += newChar;
      }
    }
    return result; 
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
