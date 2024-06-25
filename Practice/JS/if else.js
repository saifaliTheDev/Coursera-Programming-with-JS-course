var light = prompt("Signal Color..");

if (light == "green") {
  console.log("Drive");
} else if (light == "orange") {
  console.log("Get ready");
} else if (light == "red") {
  console.log("Don't Drive");
} else {
  // this code block works if no condition works
  console.log("The light is not green, orange or red");
}
