//Modules are protectes their variable and function from leaking

console.log("sum module is executed");

x = "Hello world";
function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
module.exports = { x, calculateSum };
