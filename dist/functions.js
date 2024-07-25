"use strict";
const add = (a, b) => a + b;
console.log(add(2, 2));
const addWithOptionalTax = function (a, b, tax) {
    return a + b - tax;
};
console.log(addWithOptionalTax(2, 2, 1));
