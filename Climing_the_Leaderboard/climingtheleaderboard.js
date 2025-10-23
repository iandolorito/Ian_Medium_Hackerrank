function climbingLeaderboard(ranked, player) {
    let uniqueRanked = [...new Set(ranked)];
    let result = [];
    let index = uniqueRanked.length - 1;

    for (let score of player) {
        while (index >= 0 && score >= uniqueRanked[index]) {
            index--;
        }
        result.push(index + 2);
    }

    return result;
}
