var ingrediant1 = "bread";
var ingrediant2 = "mild cheese";
var ingrediant3 = "sharp cheese";
var ingrediant4 = "butter";
var ingrediant5 = "tomato";
var ingrediant6 = "garlic";

var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];

function destructivelyAddElementToBeginningOfArray() { 
  return chocolateBars.unshift("twix");
}
function addElementToBeginningOfArray() {
  return ["twix", ...chocolateBars];
}

function addElementToEndOfArray() {
  return [...chocolateBars, "twix"];
}
function destructivelyAddElementToEndOfArray() {
  return chocolateBars.push("twix");
}

function accessElementInArray() {
  return console.log(chocolateBars[#])
}