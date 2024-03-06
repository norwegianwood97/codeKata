function solution(keymap, targets) {
    var answer = [];
    // 문자와 그 문자를 생성하기 위한 키 입력 정보를 저장하는 맵
    let charToKeyPress = {};

    // keymap을 순회하며 charToKeyPress를 채움
    for (let keyIndex = 0; keyIndex < keymap.length; keyIndex++) {
        const keyChars = keymap[keyIndex];
        for (let charIndex = 0; charIndex < keyChars.length; charIndex++) {
            const char = keyChars[charIndex];
            // 같은 문자가 여러 키에 할당되었거나 한 키에 여러 번 할당된 경우, 최소 횟수를 저장
            if (!charToKeyPress[char] || charToKeyPress[char] > charIndex + 1) {
                charToKeyPress[char] = charIndex + 1;
            }
        }
    }

    // targets 배열을 순회하며 각 문자열을 생성하기 위한 최소 키 입력 횟수를 계산
    targets.forEach(target => {
        let keyPressCount = 0;
        for (let char of target) {
            if (!charToKeyPress[char]) {
                // 만약 특정 문자를 생성할 수 있는 키가 없다면 -1 저장 후 반복 종료
                keyPressCount = -1;
                break;
            }
            keyPressCount += charToKeyPress[char];
        }
        answer.push(keyPressCount);
    });

    return answer;
}
