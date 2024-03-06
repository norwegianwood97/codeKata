function solution(wallpaper) {
    var answer = [];

    // wallpaper	
    // ["..........", ".....#....", "......##..", "...##.....", "....#....."]	[1, 3, 5, 8] 
    // input을 좌표로 변환                     
    //y=0   x= x
    //y=1   x= 5
    //y=2   x= 67 
    //y=3   x= 34              Y최소값 =1, X최소값 = 3,  y최대값 =4, x최대값 = 7
    //y=4   x= 4                    =>  [1, 3, 4+1, 7+1]
    //                              =>  (luy, lux, rdy, rdx)

    let temp = {};
    
    for(let temp_y = 0; temp_y < wallpaper.length; temp_y++){
        for(let temp_x = 0; temp_x < wallpaper[temp_y].length; temp_x++){
            if(wallpaper[temp_y][temp_x]=='#'){
                if (!temp[temp_y]) temp[temp_y] = [];
                temp[temp_y].push(temp_x);
            }
        }
    }

    let minY = Math.min(...Object.keys(temp).map(Number)); // temp의 키를 정수형 개별 요소로써 Math.min에 전달하는중!
    let maxY = Math.max(...Object.keys(temp).map(Number));

    let minX = 50, maxX = 0;
    Object.values(temp).forEach(x_row =>{
            minX = Math.min(minX, Math.min(...x_row));
            maxX = Math.max(maxX, Math.max(...x_row));
        } 
    )
    
    answer.push(minY,minX,maxY+1,maxX+1);
    return answer;
}
