var a = 12;
function operator(chakdumdum) {
	if (chakdumdum !== a) {
		return "cool";
	}
	return a;
}
console.log(operator("nada"));
console.log("\n");

function greaterThan(val) {
	if (val > 10) {
		return "love is waste of time";
	}
	if (val < 100) {
		return "sex is the worst thing";
	}
	return "sex and love both are waste";	
}
console.log(greaterThan(9));
console.log("\n");

function mixedOperator(val) {
	if (val >= 100) {
		return "It's all yours!!";
	} 
	if (val <= 10) { 
		return "Sometimes you gotta run before you can walk";
	}
	return "huahhh";
}
console.log(mixedOperator(10));
console.log("\n");

function logicalOperator(val) {
	if (val >= 21 && val <= 30) {
		return "next time";
	}
	return "just clear the skies";
}
console.log(logicalOperator(10));
console.log("\n");

function orOperator(val) {
	if(val <= 31 || val >= 21) {
		return "I don't get that";
	}
	return "U got it rite.. go ahead";
}
console.log(orOperator(234));
console.log("\n");

var jarvis = 9;
function elseFunc(val) {
	if(val < jarvis) {
		return "I'm gonna build an AI which could output anything what you ask to her...";
	} else {
		return "I gotta go MAD";
	}
}
console.log(elseFunc(5));
console.log("\n");

function ageVoting(val) {
	if(val === 18) {
		return "You are exactly 18..."
	} else if(val >18 && val < 35) {
		return "Young and dynamic enough to vote..."
	} else if(val > 35 && val < 50) {
		return "You are some what old but can perform voting..."
	} else {
		return "I think you have to go for suicide..."
	}
	return "Hahahaha!!! just kidding...."
}
console.log(ageVoting(45));
console.log("\n");

function golfScore(par, strokes) {
  if(strokes == 1) {
    return "Hole-in-one!";
  } else if(strokes <= par-2) {
    return "Eagle";
  } else if(strokes === par-1) {
    return "Birdie";
  } else if(strokes === par) {
    return "Par";
  } else if(strokes === par+1) {
    return "Bogey";
  } else if(strokes === par+2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
}
console.log(golfScore(4, 7));
console.log("\n");
