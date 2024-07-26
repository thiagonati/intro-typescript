"use strict";
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// let user = new User("Thiago", "Natividade", 90);
// console.log(user.getFullName());
class Admin extends User {
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let admin = new Admin("Thiago", "Natividade", 90);
console.log(admin.getFullName());
