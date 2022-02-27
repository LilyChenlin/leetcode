function minimumTime(time: number[], totalTrips: number): number {
    time.sort((a, b) => a - b);
    let left = 0, right = time[0] * totalTrips;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (sum(time, mid, totalTrips) < totalTrips) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};

function sum(time: number[], mid: number, totalTrips: number) {
    let total = 0;
    for (let i = 0; i < time.length; i++) {
        if (mid < time[i] || total > totalTrips) break;
        total += Math.floor(mid / time[i])
    }
    return total;
}