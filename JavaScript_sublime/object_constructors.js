//with the help of constructor...
var car = function(wheels, engines, seats, nickname) {
    this.wheels = wheels;
    this.engines = engines;
    this.seats = seats;
    this.nickname = nickname;
};
var myCar = new car(4, 1, 5, "Benz");
console.log(myCar);

//private changes..
var Car = function() {
  var speed = 10;
  this.accelerate = function(change) {
    speed += change;
  };
  this.decelerate = function() {
    speed -= 5;
  };
  this.getSpeed = function() {
    return speed;
  };
};
var Bike = function() {
  var gear = 0;
  this.getGear = function() {
    return gear;
  };
  this.setGear = function(set) {
    gear = set;
  };
};
var myCar = new Car();
var myBike = new Bike();
myBike.setGear(4);//some problem ... while running the program...
