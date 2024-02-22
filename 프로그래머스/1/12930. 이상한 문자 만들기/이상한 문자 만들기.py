def solution(s):
    answer = s.split(' ')
    temp = []
    
    for i in answer:
        temp_word = ''
        for j in range(len(i)):
            if j%2 == 0:
                temp_word += i[j].upper()
            else:
                temp_word += i[j].lower()
        temp.append(temp_word)
    return ' '.join(temp)

input_word = "try hello world"
solution(input_word)