function add(a, b) {
  let add = a + b;
  return add;
}
const result = add(3, 5);
console.log(result);

function subtract(a, b) {
  let sum1 = a - b;
  return sum1;
}
const result1 = subtract(3, 5);
console.log(result1);

function multiply(a, b) {
  let sum1 = a * b;
  return sum1;
}
const result3 = divide(6, 2);
console.log(result3);

function divide(a, b) {
  let sum1 = a / b;
  return sum1;
}
const result2 = multiply(6, 2);
console.log(result2);

function increment(n) {
  let sum1 = (n += 1);
  return sum1;
}
const result4 = increment(6);
console.log(result4);

function decrement(n) {
  let sum5 = (n -= 1);
  return sum5;
}
const result5 = decrement(6);
console.log(result5);

function makeInt(n) {
  let par = parseInt(n);
  return par;
}
const result6 = makeInt("6");
console.log(result6);

function makeInt(n) {
  let par = parseInt(n, 10);
  return par;
}
const result7 = makeInt("6");
console.log(result7);

function makeInt(n) {
  let par = parseInt(n, 10);
  return par;
}
const result8 = makeInt("nonsense!");
console.log(result8);

function preserveDecimal(n) {
  let par = parseFloat(n, 10);
  return par;
}
const result9 = preserveDecimal("80.123999");
console.log(result9);

function preserveDecimal(n) {
  let par = parseFloat(n, 10);
  return par;
}
const result0 = preserveDecimal("none");
console.log(result0);
