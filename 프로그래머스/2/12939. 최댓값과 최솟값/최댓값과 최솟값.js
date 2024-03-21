function solution(s) {
    var answer = '';
    return answer;
}
function solution(s) {
    var answer = '';
    const nums = s.split(' ').map(Number);
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    answer = `${min} ${max}`;
    return answer;
}
