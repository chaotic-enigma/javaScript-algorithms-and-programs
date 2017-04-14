//Reversing a string...
function reverseString(str) {
	var firstSplit = str.split('');
	var secondReverse = firstSplit.reverse();
	var thirdJoin = secondReverse.join('');
	return thirdJoin;
}
console.log(reverseString("fjdskufjb dskjfhjd kdfud jksfh"));//you can even use return str.split('').reverse().join('')...
console.log("\n");

//Factorial of a number...
function factorial(num) {
	var fact = 1;
	var element = 1;
	while(element <= num) {
		fact = fact * element;
		element++;
	}
	return fact;
}
console.log(factorial(5));
console.log("\n");

//palindrome checking...
function palindrome(str) {
	var ignorable = /[\W_]/g;
	var convertedString = str.toLowerCase().replace(ignorable, '');
	var palindromeString = convertedString.split('').reverse().join('');
	if(palindromeString === str) { // this condition is for words to check for the palindrome...  
		return "palindrome";
	}
	return palindromeString === convertedString; // this is for sentences.... (if true then it is palindrom vice-vresa)
}
console.log(palindrome("hghghgh"));
console.log(palindrome("jdhgfyudygcbdjrs"));
console.log(palindrome("never odd or even"));
console.log("\n");

//finding the longest word...
function findLongestWord(str) {
  var splitString = str.split(' ');
  var lengthOfI = [];
  for (var i = 0; i < splitString.length; i++) {
     for (var j = 0; j < splitString[i].length; j++) {
       var jLength = splitString[i].length;
       lengthOfI.push(jLength);
     }
  }
  var sortArray = lengthOfI.sort(function(a, b) {
    return b - a;
  });
  return sortArray[0];
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("jkgifnrg jfghifghdbgyugbrgyufduvd greuiighurehurfdhgdg fuhvjbfghfgdfg fdshfudfd fdhgfdhgfgbjgbjfbghf dsfhdsfhdfbdn fdhfgdfhv df"));
console.log("\n");

//title case... conversion of first letter to uppercase...
function testCase(str) {
	var low = str.toLowerCase();
	var split = low.split(' ');
	for (var i = 0; i < split.length; i++) {
		split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
	}
	return split.join(' ');
}
console.log(testCase("fjuefj jdfhvf fkjghuigd fdjkhfDjhjid"));
console.log(testCase("mAN sOmEtImEs you gOtTa rUn BeFoRe yOU cAn waLK..."));
console.log("\n");

//finding the longest array based on length...
function largestOfFour(arr) {
  var individual = [];
  for (var i = 0; i < arr.length; i++) {
    individual.push(arr[i].length);
  }
  var sort = individual.sort(function(a,  b) {
    return b - a;
  });
  return sort[0];}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26, 3, 65], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log("\n");


function largest(arrr) {
  // You can do this!
  for (var i = 0; i < arrr.length; i++) {
    arrr[i].sort(function(a, b){
      return b - a;
    });
  }
  return arrr;
}
console.log(largest([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log("\n");
// above code is yours... try to update it by using your own logic...

//making a largest array from the sub-arrays and itirating the largest values from each... 
function bada(arra) {
  var badaArray = [0, 0, 0, 0];
  for (var i = 0; i < arra.length; i++) {
    for (var j = 0; j < arra[i].length; j++) {
      if (arra[i][j] > badaArray[i]) {
        badaArray[i] = arra[i][j];
      }
    }
  }
  return badaArray;
}
console.log(bada([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log("\n");

//substring...
var string = "cdufhudg";
var final = string.substr(string.length - 1, string.length);
console.log(final);
console.log("\n");

//confirming end of the string...
function confirm(str, target) {
	return str.substr(-target.length) === target;
}
console.log(confirm("fkdhdbvdjvu", "n"));
console.log(confirm("dkjhcgjvcdchdcy", "y"));
console.log("\n");

function repeat(str, num) {
	if (num > 0) {
		return str.repeat(num);
	} else {
		return "";
	}
}
console.log(repeat("fudgfy ", 3));
console.log(repeat("fjdfgfjdf", 2));
console.log("\n");

//truncation...
function truncate(str, num) {
	return str.slice(0, num - 3) + "...";
}
console.log(truncate("djsugfdfbdjgydfdfjfdhfg ehdgfydstf", 11));
//another one
function anotherTruncatation(str, num) {
	if (str.length > num && num > 3) {
		return str.slice(0, num - 3) + "...";
	} else if (str.length > num && num <= 3) {
		return str.slice(0, num) + "...";
	} else {
		return str;
	}
}
console.log(anotherTruncatation("dkjsgffhduf fuhgdyfgff hdgfdf", 12));
console.log("\n");

//chunky monkey
function chunkArrayInGroups(arr, size) { //my own logic
  var simply = [];
  var result = [];
  var just = [];
  var temp = arr;
  for (var i = 0; i < size; i++) {
    simply.push(arr.slice(0, size));
  }
  result.push(simply[0]);
  for (var j = 0; j < size; j++) {
    just.push(temp.slice(2, temp.length));
  }
  result.push(just[1]);
  return result;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

function chunkyMonkey(arr, size) { //after referance...
	var newArr = [];
	for (var i = 0; i < arr.length; i += size) {
		newArr.push(arr.slice(i, i + size))
	}
	return newArr;
}
console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 3));
console.log("\n");

//splice...
function spliceArray(arr, howMany) {
	arr.splice(0, howMany);
	return arr;
}
console.log(spliceArray([1, 2, 3, 4, 5], 2));
console.log(spliceArray(["dsjbfh", "fuhd", 2, 4, 5], 1));
console.log("\n");

//mutation...
function mutation(arr) {
  var matata = arr[1].toLowerCase();
  var hakuna = arr[0].toLowerCase();
  for (var i = 0; i < matata.length; i++) {
    if (hakuna.indexOf(matata[i]) < 0) 
      return false; 
  }
  return true;
}
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hdhusg", "jdskhcsgcllo"]));
console.log("\n");

//filtering (falsy bouncer)...
function bouncer(arr) {
  var sam = arr.filter(Boolean,"");
  return sam;
}
console.log(bouncer([7, "ate", "", false, 9]));
console.log("\n");

//seek and destroy...
function destroyerArr(arr) {
	var args = arr.slice.call(arguments);
	args.splice(0, 1);
	return arr.filter(function(element) {
		return args.indexOf(element) === -1;
	});
}
console.log(destroyerArr([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyerArr(["udgfhdgf", "dihd", 1, 2, 3], 1, 2, 3));
console.log("\n");

//where do i belong...
function getIndex(arr, num) {
	arr.sort(function(a, b) {
		return a - b;
	});
	var i = 0;
	while (i < arr.length) {
		if (arr[i] >= num) {
			return parseInt(i);
		}
		i++;
	}
	return arr.length;
}
console.log(getIndex([2, 4, 1, 6], 3));
console.log("\n");

//conversion of string into ascii values...
function asciiConversion(str) {
	var sample = str.split('');
	var ascii = [];
	for (var i = 0; i < sample.length; i++) {
		for (var j = 0; j < sample[i].length; j++) {
			ascii.push(str.charCodeAt(i));
		}
	}
	return ascii;
}
console.log(asciiConversion("ABCDEFGHIJKLMNOPQRSTUVEXYZ"));
console.log("\n");

function rot13(str) {
  return str.split('').map.call(str, function(char) {
    i = char.charCodeAt(0);
    if (i < 65 || i > 90) {
      return String.fromCharCode(i);
    } else if (i < 78) {
      return String.fromCharCode(i + 13);
    }
    return String.fromCharCode(i - 13);
  }).join('');
}
console.log(rot13("SERR PBQR PNZC"));
console.log("\n");

//seaching for the name...
var text = "duhdfyevf dehfguyegvefhv fgyv jarvis bfdgvy vcvfvcf /  vgvyf  hfgdhcf dyu jarvis efuyfge egyrhv vveygduiewd wefrfgdyc fgv";
var myName = "jarvis";
var hits = [];
for (var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]){
        for (var j = i; j < i + myName.length; j++) {
            hits.push(text[j]);
        }
    }
}
if (hits === 0) {
    console.log("Your name wasn't found!")
} else {
    console.log(hits.join(' '));
}