/*
Your task is to write a function that takes a string and return a new string with all vowels removed.
*/
const disemvowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let newStr = '';
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i);
    if (vowels.indexOf(char) == -1) {
      newStr += char;
    }
  }
  return newStr;
};

/*or replace the vowels with an empty character like below*/

function disemvowel(str) {
  return str.replace(/[aeiouAEUIOU]/g, '');
}

/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

  For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer*/

function squareDigits(num){
  var numArray = num.toString(10).split('').map(Number);
  var powArray = numArray.map(function (n) { return n * n; });
  var powString = powArray.join('');

  return parseInt(powString, 10);
}

/*
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
*/
function numberToPower(number, power){
  return number ** power;
}
function numberToPower(number, power){
  if (power === 0) return 1;
  return number * numberToPower(number, power - 1)
}

