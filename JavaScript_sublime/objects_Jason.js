var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

var myDog = {
  "name": "Doggy Don",
  "legs": 4,
  "tails": 1,
  "friends": ["Entire dog family!"]  
};
console.log(ourDog.friends);
console.log("\n");
console.log(myDog.name);
console.log("\n");

var me = {
	"my name": "loophole",
	"my aim": "get job in google",
	"my strength": "having no relation ship",
	"my quote": "\"sometimes you gotta run before you can walk\""
};
me["my quote"] = "\"sometimes you gotta run before you can walk...\""
me["my frnds"] = "I'm autonomous...";
delete me["my name"];
console.log(me["my strength"]);
console.log(me["my quote"]);
console.log(me["my frnds"]);
console.log("\n");

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);
console.log("\n");

function phoneticLookup(val) {
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
    "": undefined
  };
  return lookup[val];
}
console.log(phoneticLookup("charlie"));
console.log("\n");

var doubt = {
	"hakuna": "matata",
	"timon": "pumba",
	"zig": "sharko",
	"oggy": "jack"
};
function propertyChecking(obj) {
	if(doubt.hasOwnProperty(obj) === true) {
		return doubt[obj];
	}
	return "Not Found... hahaha";
}
console.log(propertyChecking("oggy"));
console.log(propertyChecking("jdhvhvgfbf"));
console.log("\n");

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];
var secondTree = myPlants[1].list[1];
console.log(secondTree);



