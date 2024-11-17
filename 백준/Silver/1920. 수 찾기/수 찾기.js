const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let arr1 = [];
let arr2 = [];
let result = [];

rl.on("line", (line) => {
  input.push(line);

  if (input.length == 4) {
    rl.close();
  }
});

rl.on("close", () => {
  arr1 = input[1].split(" ").map(Number);
  arr2 = input[3].split(" ").map(Number);
  const set1 = new Set(arr1);
  result = arr2.map((val) => (set1.has(val) ? 1 : 0));
  console.log(result.join("\n"));
});
