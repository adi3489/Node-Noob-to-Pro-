require("./sec.js");

const util = require("node:util");

// import { x, calculateSum } from "./sum.js";
// const { x, calculateSum } = require("./calculate/sum");
// const { calculateMultiply } = require("./calculate/multiply");
const { calculateSum, calculateMultiply } = require("./calculate/index.js");
const data = require("./data.json");
console.log(JSON.stringify(data));
var name = "Namaste NodeJS";

var a = 10;

var b = 20;
// var x = 100;
calculateSum(a, b);
calculateMultiply(a, b);

console.log(x);
