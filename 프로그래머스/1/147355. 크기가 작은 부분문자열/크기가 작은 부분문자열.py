def solution(t, p):
    result = 0
    t_len = len(t)
    p_len = len(p)
    t_list = []
    
    for i in range(t_len-p_len+1):
        temp = ""
        for j in range(i, i+p_len):
            temp += t[j]
        if int(temp) <= int(p):
            result += 1    
    
    return result


print(solution("3141592", "271"))
print(solution("50022083978", "7"))
print(solution("10203", "15"))