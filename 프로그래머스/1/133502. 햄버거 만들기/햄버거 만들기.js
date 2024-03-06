function solution(ingredient) {
    var answer = 0; // result


    // ingredient	                    result
    // [2, 1, 1, 2, 3, 1, 2, 3, 1]	    2
    // [1, 3, 2, 1, 2, 1, 3, 1, 2]	    0

    // 야채:2 빵:1 고기:3
    // 빵 야채 고기 빵 = 1231

    // ingredient	                    result
    // [2, 1, 1, 2, 3, 1, 2, 3, 1]	    0
    // [2, 1,  2, 3, 1]	                1
    // [2]	                            2
    // 앞에서부터 1,2,3,1 을 지워야됨

    // for문을 통해 [1,2,3,1] 이 매칭되는지를 앞에서부터 찾고, 만약 성립된다면 지우고 result에 1추가
        // temp_ingredient에 ingredient를 추가하고 계속 갱신해야함
            // temp_ingredient 마지막까지 돌아도 [1,2,3,1] 이 매칭이 안된다면 종료

    // while (true) {
    //     let found = false;
    //     for (let i = 0; i <= ingredient.length - 4; i++) {
    //         if (ingredient[i] === 1 && ingredient[i + 1] === 2 && ingredient[i + 2] === 3 && ingredient[i + 3] === 1) {
    //             ingredient.splice(i, 4);
    //             answer += 1;
    //             found = true; 
    //             break; 
    //         }
    //     }
    //     if (!found) {
    //         break; 
    //     }
    // }

    let stack = []; // 임시로 패턴을 저장할 스택

    ingredient.forEach(ing => {
        stack.push(ing);
        if(stack.length >= 4) {
            const length = stack.length;
            if(stack[length - 4] === 1 && stack[length - 3] === 2 && stack[length - 2] === 3 && stack[length - 1] === 1) {
                stack.pop(); 
                stack.pop(); 
                stack.pop(); 
                stack.pop(); 
                answer += 1; 
            }
        }
    });

    return answer;
}