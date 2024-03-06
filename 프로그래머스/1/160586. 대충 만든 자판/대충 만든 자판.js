function solution(keymap, targets) {
    var answer = [];
    let charPosition = {};

    // keymap	            targets	        result
    // ["ABACD", "BCEFD"]	["ABCD","AABB"]	[9, 4]
    // ["AA"]	            ["B"]	        [-1]
    // ["AGZ", "BSSS"]	    ["ASA","BGZ"]	[4, 6]


    // keymap으로 charPosition 먼저 만들기!
    for(let keyIndex = 0; keyIndex<keymap.length; keyIndex++){
        let keyString = keymap[keyIndex];
        for(let charIndex = 0; charIndex<keyString.length;charIndex++){
            let char = keyString[charIndex];
            if(!charPosition[char] || charPosition[char] > charIndex+1){
                charPosition[char] = charIndex + 1;
            }
        }
    }   // keymap["ABACD", "BCEFD"] 에 대해 
        // charPosition={'A' : 1, 'B' : 1, 'C' : 2, 'D' : 5, 'E' : 3, 'F' : 4}

    // targets으로 answer 만들기
    for(let temp_targets of targets){
        let temp_answer = 0;
        for(let tempChar of temp_targets){
            if(!charPosition[tempChar]){
                temp_answer = -1;
                break;
            }
            temp_answer += charPosition[tempChar];
        }
        answer.push(temp_answer);
    }

    return answer;
}
