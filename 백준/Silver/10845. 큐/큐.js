const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let write_count = 0;
let written_count = 0;

rl.on("line", (line) => {
  if (write_count === 0) {
    write_count = parseInt(line);
  }
  let [order, val] = line.split(" ");
  val = parseInt(val);

  try {
    if (order === "push") {
      arr.push(val);
    } else if (order === "pop") {
      process.stdout.write((arr.length ? arr[0] : -1).toString() + "\n");
      arr.shift();
    } else if (order === "size") {
      process.stdout.write(arr.length.toString() + "\n");
    } else if (order === "empty") {
      process.stdout.write((arr.length ? 0 : 1).toString() + "\n");
    } else if (order === "front") {
      process.stdout.write((arr.length ? arr[0] : -1).toString() + "\n");
    } else if (order === "back") {
      process.stdout.write(
        (arr.length ? arr[arr.length - 1] : -1).toString() + "\n"
      );
    }
  } catch (err) {
    console.log(err.message);
  }
  written_count++;
  if (write_count < written_count) {
    rl.close();
  }
});
