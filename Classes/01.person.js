class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
  toString() {
    let personInfo = `Name: ${this.firstName} ${this.lastName} Age: ${this.age} Email: ${this.email}`;
    return personInfo;
  }
}

let person = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
console.log(person.toString());
