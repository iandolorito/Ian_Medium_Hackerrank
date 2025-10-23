function activityNotifications(expenditure, d) {
    function getMedian(count, d) {
        let sum = 0;
        if (d % 2 === 1) {
            let mid = Math.floor(d / 2) + 1;
            for (let i = 0; i < count.length; i++) {
                sum += count[i];
                if (sum >= mid) return i;
            }
        } else {
            let mid1 = d / 2, mid2 = mid1 + 1;
            let m1 = 0, m2 = 0;
            for (let i = 0; i < count.length; i++) {
                sum += count[i];
                if (sum >= mid1 && m1 === 0) m1 = i;
                if (sum >= mid2) {
                    m2 = i;
                    break;
                }
            }
            return (m1 + m2) / 2;
        }
    }

    let notifications = 0;
    let count = new Array(201).fill(0);

    for (let i = 0; i < d; i++) count[expenditure[i]]++;

    for (let i = d; i < expenditure.length; i++) {
        let median = getMedian(count, d);
        if (expenditure[i] >= 2 * median) notifications++;
        count[expenditure[i - d]]--;
        count[expenditure[i]]++;
    }

    return notifications;
}
