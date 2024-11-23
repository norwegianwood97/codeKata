function solution(s) {
  var answer = [];
  let zeros = 0;
  let trans = 0;
  let repeatCount = 0;

  while (1) {
    if (s === "11") {
      zeros += 1;
      trans += 2;
      break;
    }

    let tempnum = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "1") {
        tempnum++;
      } else {
        zeros++;
      }
    }

    trans++;
    if (tempnum === 1) {
      break;
    }
    let temparr = [];
    while (1) {
      temparr.push(tempnum % 2);
      tempnum = (tempnum - (tempnum % 2)) / 2;
      if (tempnum === 1) {
        temparr.push(1);
        break;
      }
    }
    
    let newchar = "";
    for (let k = 0; k < temparr.length; k++) {
      let tempchar = temparr[temparr.length - 1 - k].toString();
      newchar += tempchar;
    } // 다시 이진수로 저장.
    s = newchar;
    if (newchar === "1") {
      break;
    }
    repeatCount++;
    if (repeatCount > 10) {
      break;
    }
  }

  answer[0] = trans;
  answer[1] = zeros;

  return answer;
}
