"use strict";
const add = (a, b) => a + b;
// console.log(add(2, 2));
const addWithOptionalTax = function (a, b, tax) {
    if (typeof tax != "undefined") {
        return a + b - tax;
    }
    return a + b;
};
// console.log(addWithOptionalTax(2, 2, 1));
const applyDiscount = (prince, percentage = 5) => {
    return prince - prince * (percentage / 100);
};
// console.log(applyDiscount(10000, 10));
const calcTotal = (name, ...numbers) => {
    let total = 0;
    console.log(name);
    numbers.forEach((num) => {
        return (total += num);
    });
    return total;
};
console.log(calcTotal("Thiago", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
