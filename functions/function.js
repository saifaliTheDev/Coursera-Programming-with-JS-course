// parameters and arguments

function sumNumbers(a, b) {
  var c = a + b;
  console.log(c);
}
sumNumbers(2, 2);

function listArrayItems(arr) {
  for (var i = 0; i < 6; i++) console.log(arr[i]);
}

var colors = ["Red", "Green", "Blue", "Yellow", "Pink", "Brown", "White"];

listArrayItems(colors);

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) console.log(i, arr[i]);
}
var colors = ["Red", "Green", "Blue", "Yellow", "Pink", "Brown", "White"];

listArrayItems[colors];

//      ---------------------------------------------------

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++)
    if (arr[i] === "tomato") {
      console.log(i * 100, "tomato");
    } else {
      console.log(i * 100, arr[i]);
    }
}
var colors = ["Red", "Green", "Blue", "Yellow", "Pink", "Brown", "White"];
listArrayItems[colors];
