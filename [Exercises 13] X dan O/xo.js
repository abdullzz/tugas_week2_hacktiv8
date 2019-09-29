function xo(str) {
  return ((str.split("x").length - 1) === (str.split("o").length - 1) ? true : false)
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true