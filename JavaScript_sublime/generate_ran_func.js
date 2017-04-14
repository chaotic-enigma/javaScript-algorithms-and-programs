function randomFunction() {
	return Math.random();
}
console.log(randomFunction());
console.log("\n");

function wholeNumber() {
	var number = Math.floor(Math.random() * 55432);
	return number;
}
console.log(wholeNumber());
console.log("\n");

function myRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("random number is: %d",myRange(4, 12));
console.log("\n");

var biodata = 
"Dude!@ this is sameer just call me loophole_sameer because once i fix anything 2 do i just work 4 it until i achieve that... ie  just fall in 2 a condition that i wont do anything until i achieve that.... hahahaha";
var haHa = /i/gi;
var elachi  = /just/gi;
var chakla = /\d+/g;
var haldi = /\s+/g;
var namak = /\S/g;
var matching = biodata.match(haHa).length;
var lavang = biodata.match(elachi).length;
var ananas = biodata.match(chakla).length;
var mirchi = biodata.match(haldi).length;
var salt = biodata.match(namak).length;
console.log(matching);
console.log(lavang);
console.log(ananas);
console.log(mirchi);
console.log(salt);
console.log("\n");



