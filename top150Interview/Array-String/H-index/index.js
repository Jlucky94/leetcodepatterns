const solution = (citations) => {
    const sorted = citations.sort((a, b) => b - a)
    const hIndex = sorted.reduce((acc, cur, i) => {
        if(cur >= i + 1) acc++
        return acc
    }, 0)
    return hIndex
};
solution([3, 0, 6, 1, 5])