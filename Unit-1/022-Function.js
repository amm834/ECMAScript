/* Regular Function */
function multiply(x, y) {
  return x * y;
}
console.log(multiply(2, 3));

/* Expression */
let addtion = function(x, y) {
  return x + y;
};
console.log(addtion(4, 5));

/* IIFE */
(function() {
  console.log('I am IIFE.');
})();

/* Arrow function */
let getName = (name) => {
  return name
};
console.log(getName('AMM'));

/* _ function */
let greet = _ => {
  return 'Hello World!';
};
console.log(greet());