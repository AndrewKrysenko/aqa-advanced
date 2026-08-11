const users =[
    { name: "John", weapon: "none", color: "black", email: "johndoe@gmail.com", age: 30 },
    { name: "Johnna", weapon: "nails", color: "pink", email: "johnna@gmail.com", age: 28 },
    { name: "Abraham", weapon: "wisdom", color: "bloodyRed", email: "Abrahamoe@gmail.com", age: 93 },
    { name: "Donatello", weapon: "bō staff", color: "purple", email: "purple@gmail.com", age: 17 },
    { name: "Michelangelo", weapon: "nunchucks", color: "orange", email: "orange@gmail.com", age: 17 },
    { name: "Raphael", weapon: "sai daggers", color: "red", email: "red@gmail.com", age: 17 },
    { name: "Leonardo", weapon: "katanas", color: "blue", email: "blue@gmail.com", age: 17 }
]
for (const user of users){
    const {name, weapon, color, email, age} = user;
    console.log({name, weapon, color, email, age});
}