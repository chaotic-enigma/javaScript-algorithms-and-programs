function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  } 
  return answer;  
}
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
console.log("\n");

function switchOfStuff(val) {
  var answer = "";
  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  } 
  return answer;  
}
console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("d"));
console.log("\n");

function sequentialSizes(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      answer = "None of the above";
      break;
  } 
  return answer;  
}
console.log(sequentialSizes(1));
console.log(sequentialSizes(3));
console.log(sequentialSizes(4));
console.log(sequentialSizes(6));
console.log(sequentialSizes(7));
console.log(sequentialSizes(9));
console.log(sequentialSizes('e'));
console.log("\n");

function chainToSwitch(val) {
  var answer = "";
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    case "John":
      answer = "";
      break;
    case 156:
      answer = "";
      break;
    default:
      answer = "Oh! my Ghosh!!";
      break;
  } 
  return answer;  
}
console.log(chainToSwitch(7));
console.log(chainToSwitch(156));
console.log(chainToSwitch("John"));
console.log(chainToSwitch("#"));
console.log("\n");

function myOwn(a, b) {
  return a < b;
}
console.log(myOwn(.1212, -.2343));
console.log("\n");

function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2,8));
console.log("\n");

var count = 0;
function cardCount(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7: 
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }
  return count + (count > 0 ? " Bet" : " Hold");
}
console.log(cardCount(2), cardCount(5), cardCount('J'), cardCount('Q'),
 cardCount(9), cardCount('A'), cardCount('K'));



