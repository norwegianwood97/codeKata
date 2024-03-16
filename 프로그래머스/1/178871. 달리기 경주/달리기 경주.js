// 경마
// players = []
// callings = []

// players 의 개체가 바로 앞 개체를 추월하면 callings에 기입

// players: ["mumu", "soe", "poe", "kai", "mine"]
// callings: ["kai", "kai", "mine", "mine"]
// result: ["mumu", "kai", "mine", "soe", "poe"]

// mumu 1               1
// soe  2     3      4  4
// poe  3  4     5      5
// kai  4  3  2         2
// mine 5        4   3  3
//		 k   k  m  m

// swap 방식이 적합해 보인다.
// callings에서 호출된 녀석과 바로 앞 순위의 녀석을 swap하는 방식.
// players로 입력된 input을 answer이라는 배열에 저장하여서 callings가 끝날때까지 변경하는 방식

// function solution(players, callings) {
//   let answer = players.slice(); // answer: ["mumu", "soe", "poe", "kai", "mine"]
//   for (let i = 0; i < callings.length; i++) {
//     let current_position = answer.indexOf(callings[i]);
//     let temp = answer[current_position];
//     answer[current_position] = answer[current_position - 1];
//     answer[current_position - 1] = temp;
//   }
//   return answer;
// }

// console.log(
//   solution(
//     ['mumu', 'soe', 'poe', 'kai', 'mine'],
//     ['kai', 'kai', 'mine', 'mine']
//   )
// );

function solution(players, callings) {
  let answer = [];
  let player_map = {};
  players.forEach((player, index) => {
    player_map[player] = index;
  });
  //   player_map = {
  //     'mumu':0,
  //     'soe':1,
  //     'poe':2,
  //     'kai':3,
  //     'mine':4
  //   }
  answer = players.slice();

  for (let i = 0; i < callings.length; i++) {
    let temp = player_map[callings[i]]; // 3

    let temp_player = answer[temp]; // kai
    answer[temp] = answer[temp - 1]; // answer[3] = 'poe'
    answer[temp - 1] = temp_player; // answer[2] = 'kai'
    player_map[answer[temp]] = temp; // poe:3
    player_map[temp_player] = temp - 1; // kai:2
  }

  return answer;
}

console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine']
  )
);
// result: ["mumu", "kai", "mine", "soe", "poe"]

