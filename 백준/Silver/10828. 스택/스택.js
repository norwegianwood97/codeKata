const readline = require("readline");

let arr = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let total_questions = 0;

rl.on("line", (input) => {
  if (total_questions === 0) {
    total_questions = parseInt(input);
    return;
  }

  let [command, val] = input.split(" ");

  if (command === "push") {
    arr.push(val);
  } else if (command === "pop") {
    process.stdout.write(arr.length === 0 ? "-1\n" : arr.pop() + "\n");
  } else if (command === "size") {
    process.stdout.write(arr.length + "\n");
  } else if (command === "empty") {
    process.stdout.write(arr.length === 0 ? "1\n" : "0\n");
  } else if (command === "top") {
    process.stdout.write(
      arr.length === 0 ? "-1\n" : arr[arr.length - 1] + "\n"
    );
  }
  total_questions--;
  if (total_questions === 0) {
    rl.close();
  }
});
