function solution(survey, choices) {
    var answer = '';    // result
    let Score = {R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0};

    //  survey	                        choices	            result
    //  ["AN", "CF", "MJ", "RT", "NA"]	[5, 3, 2, 7, 5]	    "TCMA"
    //  ["TR", "RT", "TR"]	            [7, 1, 3]	        "RCJA"
    
    //1~3 : 전자 + 3,2,1
    //4   : x
    //5~7 : 후자 + 1,2,3
    //0점이면 전자
 
 
    // choices에 따라 Score 채우기
    let count = 0;
    let max_count = survey.length;
    while(count < max_count){
        survey_String = survey[count];
        frontChar = survey_String[0];
        backChar = survey_String[1]; 
        if(choices[count] == 1)
            Score[frontChar] += 3;
        else if(choices[count] == 2)
            Score[frontChar] += 2;
        else if(choices[count] == 3)
            Score[frontChar] += 1;
        else if(choices[count] == 5)
            Score[backChar] += 1;
        else if(choices[count] == 6)
            Score[backChar] += 2;
        else if(choices[count] == 7)
            Score[backChar] += 3;
        count++;
    }

    // Score을 이용해 answer 만들기
    //R-T
    //C-F
    //J-M
    //A-N
  
    answer += Score['R'] >= Score['T'] ? 'R' : 'T';
    answer += Score['C'] >= Score['F'] ? 'C' : 'F';
    answer += Score['J'] >= Score['M'] ? 'J' : 'M';
    answer += Score['A'] >= Score['N'] ? 'A' : 'N';
    return answer;
}