function solution(today, terms, privacies) {
    let answer = [];
    let termMap = new Map();

    terms.forEach(term => {
        const [termType, period] = term.split(' ');
        termMap.set(termType, parseInt(period));
    });

    const parseDate = (dateStr) => {
        const [year, month, day] = dateStr.split('.').map(Number);
        return { year, month, day };
    };

    const { year: todayYear, month: todayMonth, day: todayDay } = parseDate(today);

    privacies.forEach((privacy, index) => {
        const [collectedDateStr, termType] = privacy.split(' ');
        const periodMonths = termMap.get(termType);
        const { year: collectedYear, month: collectedMonth, day: collectedDay } = parseDate(collectedDateStr);

        let expiryYear = collectedYear + Math.floor((collectedMonth - 1 + periodMonths) / 12);
        let expiryMonth = (collectedMonth - 1 + periodMonths) % 12 + 1;
        let expiryDay = collectedDay - 1; 
        
        if (expiryYear < todayYear || (expiryYear === todayYear && expiryMonth < todayMonth) || (expiryYear === todayYear && expiryMonth === todayMonth && expiryDay < todayDay)) {
            answer.push(index + 1);
        }
    });

    return answer;
}

