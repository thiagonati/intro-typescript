const add = (a: number, b: number): number => a + b;
// console.log(add(2, 2));

const addWithOptionalTax = function (
  a: number,
  b: number,
  tax?: number
): number {
  if (typeof tax != "undefined") {
    return a + b - tax;
  }
  return a + b;
};

// console.log(addWithOptionalTax(2, 2, 1));

const applyDiscount = (prince: number, percentage: number = 5): number => {
  return prince - prince * (percentage / 100);
};

// console.log(applyDiscount(10000, 10));

const calcTotal = (name: string, ...numbers: number[]): number => {
  let total = 0;
  console.log(name);
  numbers.forEach((num) => {
    return (total += num);
  });
  return total;
};

console.log(calcTotal("Thiago", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
