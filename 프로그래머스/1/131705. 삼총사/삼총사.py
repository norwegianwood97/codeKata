def solution(number):
    n = len(number)
    result = 0
    
    for i in range(n):
        for j in range(i+1,n):
            for k in range(j+1,n):
                if(number[i] + number[j] + number[k] == 0):
                    result += 1   
                    
    return result

print(solution([-2, 3, 0, 2, -5]))
print(solution([-3, -2, -1, 0, 1, 2, 3]))
print(solution([-1, 1, -1, 1]))