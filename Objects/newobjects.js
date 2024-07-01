//Object literals and the brackets notation

var house2 = {
  rooms: 4,
  color: "pink",
  priceUSD: 12345,
};
console.log(house2.priceUSD);

var house2 = {}; // object declare

house2.rooms = 4;
console.log(house2);

// alternative method

house2["rooms"] = 4;
house2["color"] = "pink";
house2["priceUSD"] = 12345;
console.log(house2);

// ----------------------------------

/* both access and update properties on objects using either the dot notation, or the brackets notation */

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car);

/* With the brackets notation, I can add space characters inside property names, like this:   */

car["number Of Doors"] = 4;
console.log(car);

/* Evaluate Expressions */

var arrOfKeys = ["speed", "altitude", "color"];

var drone = {
  speed: 100,
  altitude: 200,
  color: "red",
};
for (var i = 0; i < arrOfKeys.length; i++) {
  console.log(drone[arrOfKeys[i]]);
}
