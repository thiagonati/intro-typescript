const add = (a: number, b: number): number => a + b;
console.log(add(2, 2));

const addWithOptionalTax = function (
  a: number,
  b: number,
  tax: number
): number {
  return a + b - tax;
};

console.log(addWithOptionalTax(2, 2, 1));
