
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let length = 0;

rl.on("line", (line) => {
  input.push(parseInt(line));
  length = input[0];
  if (input.length > length) {
    input = input.slice(1);
    rl.close();
  }
});

let arr = [];
let sum = 0;

rl.on("close", () => {
  for (let i = 0; i < length; i++) {
    if (input[i] === 0) {
      arr.pop();
    } else {
      arr.push(input[i]);
    }
  }
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  console.log(sum);
});
