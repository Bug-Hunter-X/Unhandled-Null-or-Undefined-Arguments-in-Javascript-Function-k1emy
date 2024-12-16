function foo(a, b) {
  a = a === null || a === undefined ? 0 : a; // Handle null or undefined values with default values
  b = b === null || b === undefined ? 0 : b; 
  if (typeof a !== 'number' || typeof b !== 'number'){
    return "Invalid Input: Arguments must be numbers";
  }
  return a + b; //Corrected code
}
console.log(foo(null, 5)); // Output: 5
console.log(foo(undefined, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, undefined)); // Output: 5
console.log(foo(5,5)); //Output: 10
console.log(foo("hello", 5)); // Output: Invalid Input: Arguments must be numbers