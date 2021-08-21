// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const realAlpha = "abcdefghijklmnopqrstuvwxyz";
 
  function substitution(input, alphabet, encode = true) {
    //returns false if alphabet is not 26 characters
    if (!alphabet || alphabet.length != 26) {return false};
    let startAlpha = realAlpha;   
    let targetAlpha = alphabet;
    let result = "";
  
    if (!encode) {
      startAlpha = alphabet;
      targetAlpha = realAlpha;
    }
    
    
    for (let i = 0; i < input.length; i++){
      //returns false if there are duplicate characters in a given alphabet
      let arr = targetAlpha.split(targetAlpha[i]);
      if (arr.length > 2) return false;
      //ignores capital letters 
      let inputChar = input[i].toLowerCase();
      let index = startAlpha.indexOf(inputChar);
      //returns spaces in message before and after encoding/decoding
      //handles special characters 
      if(index === -1) {
        result += inputChar;
      } else {
        let newChar = targetAlpha[index];
      result += newChar;
      }
    }
    return result;
  }
  return {
    substitution,
  }
})();

module.exports = { substitution: substitutionModule.substitution };
