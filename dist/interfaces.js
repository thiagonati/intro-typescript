"use strict";
const getUser = (user) => {
    return `${user.firstName} ${user.lastName}, age: ${user.age}`;
};
// let user = {
//   firstName: "Thiago",
//   lastName: "Natividade",
//   age: 24,
// };
// console.log(getUser(user));
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person("Thiago", "Natividade", 24);
console.log(getUser(person));
