function convertToF(celsius) {
	var fahrenheit;
	fahrenheit = celsius*(9/5)+32;
	return fahrenheit;
}
console.log(convertToF(-10));
console.log(convertToF(-98765));
console.log(convertToF(853));
console.log(convertToF(-0.987));
console.log(convertToF(-0.000000000000987));
