// mapping
var oldrray = [1,2,3,4,5,6,7,8,9];
var mapArray = oldrray.map(function(val) {
	return val / 2;
});
console.log(mapArray);
console.log("\n");

//reducing
var reduceArray = 0;
reduceArray = mapArray.reduce(function(prev, current) {
	return prev + current;
});
console.log(reduceArray);
console.log("\n");

//filtering
var filteredArray = oldrray.filter(function(val) {
	return val < 6.32;
});
console.log(filteredArray);
console.log("\n");

//sorting
var sortedArray = mapArray.sort(function(a, b) {
	return b - a;
});
console.log(sortedArray);
console.log("\n");

//reversing
var reverseArray = oldrray.reverse();
console.log(reverseArray);
console.log("\n");

//concatination
var concatArray = reverseArray.concat(mapArray);
console.log(concatArray);
console.log("\n");

//splitting
var string = "dnjghfv vfjfvhbfuhfgvfdev fevhfyfgyufhdbc dhufgyuvbvhufgyc yufgey";
var splitArray = string.split(' ');
console.log(splitArray);
console.log("\n");

//joining
var joinString = splitArray.join(' and ');
console.log(joinString);
console.log("\n");
