// park	                        routes	            result
// ["SOO","OOO","OOO"]	        ["E 2","S 2","W 1"]	[2,1]
// ["SOO","OXX","OOO"]	        ["E 2","S 2","W 1"]	[0,1]
// ["OSO","OOO","OXO","OOO"]	["E 2","S 3","W 1"]	[0,0]

// 입력된 park의 정보에 따라 map을 구성해야함.
// park에서 맵의 크기, x의 위치를 알아내야함 > S와 함께 map에 넣기

// routes에서 각각의 방향, 이동거리를 뽑아서 S를 이동시키기

// 최종 위치를 좌표로 return
function solution(park, routes) {
  let startX, startY;
    
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === 'S') {
        startX = i;
        startY = j;
      }
    }
  }
  
  let currentPosition = [startX, startY];
  for (const route of routes) {
    const [direction, stepsStr] = route.split(' ');
    const steps = parseInt(stepsStr, 10);
    let isValid = true;
    
    for (let step = 1; step <= steps; step++) {
      let nextX = currentPosition[0];
      let nextY = currentPosition[1];
      
      switch (direction) {
        case 'N': nextX -= step; break;
        case 'S': nextX += step; break;
        case 'W': nextY -= step; break;
        case 'E': nextY += step; break;
      }
      
      if (nextX < 0 || nextX >= park.length || nextY < 0 || nextY >= park[0].length || park[nextX][nextY] === 'X') {
        isValid = false;
        break;
      }
    }
    
    if (isValid) {
      switch (direction) {
        case 'N': currentPosition[0] -= steps; break;
        case 'S': currentPosition[0] += steps; break;
        case 'W': currentPosition[1] -= steps; break;
        case 'E': currentPosition[1] += steps; break;
      }
    }
  }
  
  return currentPosition;
}
