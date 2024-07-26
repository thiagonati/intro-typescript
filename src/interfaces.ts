interface UserInterface {
  firstName: string;
  readonly lastName: string;
  age: number;

  getFullName(): string;
}

const getUser = (user: UserInterface): string => {
  return `${user.firstName} ${user.lastName}, age: ${user.age}`;
};

// let user = {
//   firstName: "Thiago",
//   lastName: "Natividade",
//   age: 24,
// };

// console.log(getUser(user));

class Person implements UserInterface {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("Thiago", "Natividade", 24);
console.log(getUser(person));
