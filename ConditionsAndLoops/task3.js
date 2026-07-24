const number = 6;
// *FOR* loop
console.log("*FOR* loop");
for (let i = 1; i <= 10; i++) {
  const result = number * i;
  console.log(`${number} x ${i} = ${result}`);
}
//spacer
console.log("");

// *WHILE* loop
console.log("*WHILE* loop");
let i = 1;
while (i <= 10) {
  const result = number * i;
  console.log(`${number} x ${i} = ${result}`);
  i++;
}