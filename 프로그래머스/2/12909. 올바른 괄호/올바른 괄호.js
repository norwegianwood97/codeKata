function solution(s){
    var answer = true;
    const s_count = s.length;
    let count = 0;
    
    for(let i = 0; i < s_count; i++){
        if(s[i]==='('){
            count++;
        }else if(s[i]===')'){
            count--;
        }else{
            return false;
        }
        if(count<0){
            return false;
        }
    }
    if(count != 0){
        return false;
    }
    
    return answer;
}