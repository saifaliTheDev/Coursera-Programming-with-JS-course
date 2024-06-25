var light = "green";
switch (light) {
  case "green":
    console.log("Drive");
    break;
  case "orange":
    console.log("Get Ready");
    break;
  case "red":
    console.log("Don't Drive");
    break;
  default:
    //this code block runs if no condition matches
    console.log("The light is not green, orange, or red");
    break;
}
