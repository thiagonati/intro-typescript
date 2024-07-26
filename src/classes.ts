class User {
  protected readonly firstName: String;
  protected readonly lastName: String;
  protected readonly age: number;

  constructor(firstName: String, lastName: String, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  public getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// let user = new User("Thiago", "Natividade", 90);

// console.log(user.getFullName());

class Admin extends User {
  public getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let admin = new Admin("Thiago", "Natividade", 90);

console.log(admin.getFullName());
