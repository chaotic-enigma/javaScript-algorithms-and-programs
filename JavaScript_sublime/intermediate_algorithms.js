//sum of all elements in a given range
function sumAll(arr) {
  var maximum = Math.max(arr[0], arr[1]);//since we have two indexes, we take oth index and 1st index
  var minimum = Math.min(arr[0], arr[1]);//same explaination(above)
  var totalSum = 0;
  for (var i = minimum; i <= maximum; i++){
    totalSum += i; // looping and summing each element
  }
  return totalSum;
}
console.log(sumAll([5, 10]));

// poping out the diff element from two arrays
function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(diffEle => !arr1.includes(diffEle) || !arr2.includes(diffEle)); //takes out the element which is different (obtained from both -- ||) 
}
console.log(diffArray([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]));

// conversion of decimal numbers into roman numerals
function convertToRoman(num) {
  // default arrays
  var decimalNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var romanConversion = '';
  for (var i = 0; i < decimalNumerals.length; i++) {
    while (decimalNumerals[i] <= num) {
      romanConversion += romanNumerals[i];
      num -= decimalNumerals[i];
    }
  }
 return romanConversion;
}
console.log(convertToRoman(36));

// kinda sub-string (but based on objects)
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var sourceKeys = Object.keys(source);
  arr =  collection.filter(function (obj) {
    return sourceKeys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// replacing a particular word with with another word in string
function myReplace(str, before, after) {
  var index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  str = str.replace(before, after);
  return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// playing with the words (piglatin)
function translatePigLatin(str) {
  var piggy;
  var piglet = /[aeiou]/gi; // vowels
  if (str[0].match(piglet)) { // condition to check the first index vowel or not 
    piggy = str + 'way'; // replacement with 'way'
  } else {
    var pigVowel = str.indexOf(str.match(piglet)[0]); // if the 1st letter is not vowel then shifting of the 1st letter at the end and adding 'ay'
    piggy = str.substr(pigVowel) + str.substr(0, pigVowel) + 'ay';
  }
  return piggy;
}
translatePigLatin("consonant");
translatePigLatin("qarhythm");

// DNA pairing as per the letters
function pairElement(str) {
  var dnaPair = [];
  function pairing(dna) {
    switch(dna) {
      case 'A':
        dnaPair.push(['A', 'T']);
        break;
      case 'T':
        dnaPair.push(['T', 'A']);
        break;
      case 'C':
        dnaPair.push(['C', 'G']);
        break;
      case 'G':
        dnaPair.push(['G', 'C']);
        break;
    }
  } 
  for (var i = 0; i < str.length; i++) {
    pairing(str[i]);
  }
  return dnaPair;
}
pairElement("GCG");

// returning the missing letter from the alphabetical range
function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) { // playing with built-in functioins
     var ascii = str.charCodeAt(i);
    if (ascii !== str.charCodeAt(0) + i) {
      return String.fromCharCode(ascii - 1);
    }
  }
  return undefined;
}
fearNotLetter("abce");

//boo who --boolean
function booWhoo(bool) {
	return typeof bool === 'boolean';
}
booWhoo(null);

// sorted union using built-in functions
function uniteUnique() {
  var concatenation = [];
  var i = 0;
  while (arguments[i]) { // looping through each arguments and joining them into one
    concatenation = concatenation.concat(arguments[i]);// concat is the built-in func used to join the args 
    i++;
  }
  var afterFiltering = concatenation.filter(function (ele, pos){ //filtering and removing the duplicates
    return concatenation.indexOf(ele) == pos;
  });
  return afterFiltering;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// html enetities -- basic_simple_code
function convertHTML(str) {
  // &colon;&rpar;
  var htmlEntities = str.split('');
  for (var i = 0; i < str.length; i++) {
    switch(htmlEntities[i]) {
      case '&':
        htmlEntities[i] = '&amp;';
        break;
      case '<':
        htmlEntities[i] = '&lt;';
        break;
      case '>':
        htmlEntities[i] = '&gt;';
        break;
      case '"':
        htmlEntities[i] = '&quot;';
        break;
      case "'":
        htmlEntities[i] = '&apos;';
        break;
    }
  }
  htmlEntities = htmlEntities.join('');
  return htmlEntities;
}
convertHTML("Dolce & Gabbana");

// replacing '-' in between the words
function spinalCase(str) {
  // creating a var reg_exp fro white spaces
  var reg_exp = /\s+|_+/g;
  // replacing the lower-uppercase into lower-space-uppercase (generally to create spaces between l and u)
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // returning the solution with the lowercase format in between '-'
  return str.replace(reg_exp, '-').toLowerCase();
}
spinalCase('This Is Spinal Tap');

// sum of fibonacci nums in the given range
function sumFibs(num) {
  var previousNum = 0;
  var currentNum = 1;
  var resultant = 0;
  while (currentNum <= num) {
    if (currentNum % 2 !== 0) { // when currentNum = 2, the if cond gets terminated
      resultant += currentNum;
    }
    currentNum += previousNum;
    previousNum = currentNum - previousNum;
  }
  return resultant;
}
sumFibs(4);

// sum of all primes in a given range
function sumPrimes(num) { // refered from freecodecamp | github
 var res = 0;
 function getPrimes(max) {
    var sieve = [];
    var i,j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes;
  }
  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }
  return res;
}
sumPrimes(10);

// smallest common
function smallestCommons(arr) {
  var bound = []; // taking the range in reverse order
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    bound.push(i);
  }
  var common = bound[0];
  for (i = 1; i < bound.length; i++) {
    var gcdnum = gcd(common, bound[i]); // calling the function gcd
    common = (common * bound[i]) / gcdnum;
  }
  return common;
}
function gcd(a, b) { // functional code
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a%b); // returning the function
  }
}
smallestCommons([1,5]);

// returning the first best search which satisfies the given condition
function findElement(arr, func) {
  var num = 0;
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      return num;
    }
  }
}
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

// drop it down
function dropElements(arr, func) {
  // Drop them elements.
  var kakka = arr.length;
  for (var i = 0; i < kakka; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
dropElements([1, 2, 3], function(n) {return n < 3; });

// cutting into single array
function steamrollArray(arr) {
  // I'm a steamroller, baby
  /*var flattened = arr.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  return flattened;*/
  return arr.reduce(function (flat, plzFlatMe) {
    return flat.concat(Array.isArray(plzFlatMe)? steamrollArray(plzFlatMe): plzFlatMe); 
  }, []);
}
steamrollArray([1, [2], [3, [[4]]]]);

// binary agents
function binaryAgent(str) {
  var binary = str.split(' '); // seperating the strings
  var uniary = [];
  for (var i = 0; i < binary.length; i++) {
    uniary.push(String.fromCharCode(parseInt(binary[i], 2))); //conversion of binary codes to strings
  }
  return uniary.join(''); // joining everything
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// Is everyone being true?
function truthCheck(collection, pre) {
  return collection.every(function (property) { 
    return property.hasOwnProperty(pre) && Boolean(property[pre]); // checking the property of 'pre' and then proceeding further if it comes to be true
  });
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
