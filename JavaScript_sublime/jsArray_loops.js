//for loop :-)
var myArray = [];
for (var i = 0; i < 10; i++) {
	console.log(myArray.push(i));
}
console.log(myArray);

var myEven = [];
for (var i = 0; i < 10; i += 2) {
	console.log(myEven.push(i));
}
console.log(myEven);

var myOdd = [];
for (var i = 1; i < 10; i += 2) {
	console.log(myOdd.push(i));
}
console.log(myOdd);

var myOwn = [];
var total = 0;
for (var i = 99; i > 50; i -= 3) {
	myOwn.push(i);
}
console.log(myOwn);
for (var i = 0; i < myOwn.length; i++) {
	total += myOwn[i];
}
console.log("The total of the above array is: %d", total);

function multiplication(arr) {
	var product = 1;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			product = product * arr[i][j];
		}
	}
	return product;
}
console.log(multiplication([[1, 2, 3],[.43, .0998, 0.43],[65,8]]));

// while loop :-)
var myArray = [];
var i = 0;
while(i < 10) {
	myArray.push(i);
	i++;
}
console.log(myArray);

var myEven = [];
var i = 0;
while(i < 10) {
	myEven.push(i);
	i += 2;
}
console.log(myEven);

var myOdd = [];
var i = 1;
while(i < 10) {
	myOdd.push(i);
	i += 2;
}
console.log(myOdd);

var myOwn = [];
var total = 0;
var i = 99;
var j = 0;
while(i > 50) {
	myOwn.push(i);
	i -= 3;
}
console.log(myOwn);
while(j < myOwn.length) {
	total += myOwn[j];
	j++;
}
console.log("The total of the above array is: %d", total);





