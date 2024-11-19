
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (input.length === 4) {
    rl.close();
  }
});

rl.on("close", () => {
  let N = parseInt(input[0]);
  let arr_N = input[1].split(" ").map((num) => parseInt(num));
  if (arr_N.length != N) {
    console.log("입력된 카드의 개수가 맞지 않습니다.");
  }
  let M = parseInt(input[2]);
  let arr_M = input[3].split(" ").map((num) => parseInt(num));
  if (arr_M.length != M) {
    console.log("입력된 카드의 개수가 맞지 않습니다.");
  }

  let cardMap = {}; // arr_N의 카드들을 종류별로 몇장인지 저장할 해시맵
  for (const card of arr_N) {
    cardMap[card] = (cardMap[card] || 0) + 1;
  }
  let result = [];
  for (const isCard of arr_M) {
    result.push(cardMap[isCard] || 0);
  }
  console.log(result.join(" "));
});
