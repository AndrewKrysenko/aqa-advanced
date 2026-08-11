const person ={
    firstName: "John",
    lastName: "Doe",
    age: 99,
}
person.email = "john.doe@gmail.com";
delete person.age;
console.log(person);