function solution(A,B){
    let answer = 0;
    let len = A.length;
    A = A.sort((a,b) => a-b);
    B = B.sort((a,b) => a-b);
    
    for(let i = 0; i < len; i++){
        answer += A[i]*B[len-i-1];
    } 
    
    return answer;
}



