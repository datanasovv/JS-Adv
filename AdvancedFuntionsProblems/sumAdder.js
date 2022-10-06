function sumAdder(num) {
  let sum = 0;
  function inner(num2) {
    sum += num2;
    return inner;
  }
  inner.toString = () => sum;
  return inner(num);
}

console.log(sumAdder(1)(6)(-3).toString());
