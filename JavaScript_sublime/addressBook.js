/*var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};
var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};
var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}
var le = contacts.length;
function list(){
    for (var i = 0; i < le; i++) {
    printPerson(contacts[i])
    }
}
// searching for a particular name...
function search(lastName) {
    for (var  i = 0; i < contacts.length; i++){
        if(contacts[i].lastName === lastName){
            printPerson(contacts[i]);
        } else {
            console.log("not found");
        }
        return i;
    }
}
search("Jone");
*/
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
    for (var  i = 0; i < contacts.length; i++){
        if(contacts[i].lastName === lastName){
            printPerson(contacts[i]);
        }
    }
}
search("Jones");

function add(firstName, lastName, phoneNumber, email) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    }   
}
add("Jarvis", "Stark", "123354357", "jarvis@gmail.com")
list();
console.log(typeof contacts);
console.log(contacts.hasOwnProperty('marrital-status'));
console.log("\n");

function Animal (name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName  = function() {
    console.log("Hi my name is " + this.name);
};
Animal.prototype.hindLegs = function() {
    console.log("Hi I have " + this.numLegs + " legs");
};
var penguin = new Animal("Captain Cook", 2);
console.log(penguin.sayName(), penguin.hindLegs());
// need to work for above code...
console.log("\n");

// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}
// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();
var myEmperor = new Emperor("Jules");
console.log(myEmperor.saying); // should print "Waddle waddle"
console.log(myEmperor.numLegs); // should print 2
console.log(myEmperor.isAlive); // should print true
console.log("\n");

// to access private info beyond public info
/*function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;//private info and want to access it  
   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
   };
}
var john = new Person('John','Smith',30);
//console.log(john.bankBalance);
// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();//assigning 
console.log(myBalance);//got the balance
console.log("\n");*/
//another method...
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;       
   // create the new function here
   this.askTeller = function(pass) {
        if(pass === 1234) {
            return bankBalance;
        } else {
            return "wron password"
        }
    };
}
var john = new Person('John','Smith',30);
//console.log(john.bankBalance);//accessing privately...
console.log(john.askTeller(1234));
console.log(john.askTeller(2132));
console.log("\n");


