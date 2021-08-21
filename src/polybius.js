// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
   const key = {
    a: '11',
    b: '21', 
    c: '31',  
    d: '41',
    e: '51', 
    f: '12',
    g: '22', 
    h: '32', 
    // when encoding, i and j will translate to 42.
    i: '42',
    j: '42',
    k: '52', 
    l: '13', 
    m: '23', 
    n: '33', 
    o: '43',
    p: '53', 
    q: '14',
    r: '24', 
    s: '34', 
    t: '44', 
    u: '54', 
    v: '15', 
    w: '25', 
    x: '35', 
    y: '45', 
    z: '55'
  };
  
  function polybius(input, encode = true) {
     
    let result = "";
    //ignores capital letters
    input = input.toLowerCase()
    if (encode)  {
      for (let i = 0; i < input.length; i++){
        let char = input[i];
        //maintain spaces when encoding
        if (char === " ") {
          result += char;
        } else {
          let num = key[char];
          result += num;
        }
        }
      } else {
        let noSpaces = "";
        for (let i = 0; i < input.length; i++){
          if(input[i] != " ") noSpaces += input[i];
        }
        //when decoding, number of characters in string excluding spaces is even or returns false
        if (noSpaces.length % 2 != 0) {
          return false;
        }
        while (input){
          //maintain spaces in the message when decoding 
          if (input[0] === " "){
            result += " ";
            input = input.slice(1, input.length);
          }
          let cipher = input.slice(0, 2);
          //when decoding, 42 is translated to (i/j)
          if (cipher === '42') {
          result += '(i/j)';
          } else {
          for (let char in key) {
            if (key[char] === cipher) result += char; 
          }
          }
          input = input.slice(2, input.length);
        }
      }
    return result; 
    }
  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
