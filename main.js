function convertToRoman(number) {
  let str = "" //Used to return string. 
  let numKey = {
    'M': 1000, 'CM': 900, 'D': 500,
    'CD': 400, 'C': 100, 'XC': 90,
    'L': 50, 'XL': 40, 'X': 10,
    'IX': 9, 'V': 5, 'IV': 4,
    'I': 1,
  } //Used to cycle through.
  function divideByKey(num) {
    while (num > 0) { //While there is a number to be converted.
      for (let elements in numKey) { //Checks number against dictionary entries.
        if (numKey[elements] <= num) { //If number is able to be subtracted from.
          str += elements //Adds the key to the string.
          console.log("Current String: " + str);
          num -= numKey[elements]; //Subtracts key value.
          console.log("Remaining number following subtraction: " + num);
          break; //Breaks to restart for loop.
        }
      }
    }
  }
  console.log("Original Number: " + number);
  divideByKey(number); //Calls Method.
 return str;
}

convertToRoman(36);
