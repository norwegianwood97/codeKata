const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let arr_length = 0;
let written_count = 0;

rl.on("line", (line) => {
  let line_toInt = Number(line);
  if (isNaN(line_toInt)) {
    console.log("숫자가 아닙니다.");
    return;
  }

  if (arr_length === 0) {
    arr_length = line_toInt;
  } else {
    arr.push(line_toInt);
    written_count++;
    if (written_count === arr_length) {
      rl.close();
    }
  }
});

rl.on("close", () => {
  let arr_temp = [];
  let result = [];
  for (let i = 1; i <= arr_length; i++) {
    if (arr_temp.length === 0 || arr[0] > arr_temp[arr_temp.length - 1]) {
      arr_temp.push(i);
      result.push("+");
    }
    while (arr[0] === arr_temp[arr_temp.length - 1]) {
      arr_temp.pop();
      arr.shift();
      result.push("-");
      if (arr.length === 0) break;
    }
  }
  if (arr.length != 0) {
    console.log("NO");
  } else {
    console.log(result.join("\n") + "\n");
  }
});
