function solution(id_list, report, k) {
    let reportCount = {};
    let userReports = {};
    id_list.forEach(id => {
        reportCount[id] = 0;
        userReports[id] = new Set(); 
    });

    report.forEach(r => {
        const [reporter, reported] = r.split(' ');
        if (!userReports[reporter].has(reported)) {
            userReports[reporter].add(reported);
            reportCount[reported]++;
        }
    });

    let answer = id_list.map(id => {
        return Array.from(userReports[id]).reduce((acc, reported) => {
            if (reportCount[reported] >= k) acc++;
            return acc;
        }, 0);
    });

    return answer;
}
