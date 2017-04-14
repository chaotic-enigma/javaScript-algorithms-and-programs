var coding = [["coding is my life",42,9],["just do deep work in coding",.2,2.33343],
["create a code that hires google","learn computer languages","cool"]];
coding.push(["blah blah"]);
coding.pop();
coding.shift();
coding.unshift(["coding is my life",42,9]);
console.log(coding);
console.log(coding[2][0]);
console.log("\n");

var myList = [];

myList.push(["Cockroaches",32],["Frogs",9],["GrassHoppers",12],["Chameleons",22],["Spiders",99]);
console.log(myList);
console.log("\n");

function reuasableFunction() {
	return "Hey there! I'm gonna have ubuntu in my pc...";
}
console.log(reuasableFunction());
console.log("\n");

function hakunaMatata(a,b) {
	return (a + b);
}
console.log(hakunaMatata("I love ","ubuntu"));
console.log("\n");

/**
var pumba = 10;
function timonNPumba() {
	timon = 5;
}
function comic() {
	var result = "";
	if (typeof pumba != 'undefined') {
		result += "Shashank beats Purusharth" + pumba;
	}
	if (typeof timon != 'undefined') {
		result += "Purusharth is Badava" + timon;
	}
	console.log(result);
} **/

var fizz;
function timeMachine(num) {
	return (num * 2.5433)/1.2332;
}
fizz = timeMachine(1.321);
console.log("Function's value is:\n", fizz);
console.log("\n");

var array = [];
array.push(1,2,3,4,5);
console.log("My array is: ", array);

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
console.log("\n");

function randomFunction() {
	return Math.random();
}
console.log(randomFunction());
console.log("\n");



