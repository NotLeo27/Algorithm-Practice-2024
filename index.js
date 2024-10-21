function factorial(x) {
  if (x <= 0) {
    return "negative # or 0";
  }
  let n = 1;
  for (let i = 1; i <= x; i++) {
    n *= i;
  }
  return n;
}

function newFactorial(x) {}
