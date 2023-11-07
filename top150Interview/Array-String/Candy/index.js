const solution = (ratings) => {
    const n = ratings.length
    if (n === 1) return 1

    const candies = new Array(n).fill(1)

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1); // !!!KEYPOINT
        }
    }

    return candies.reduce((sum, candy) => sum + candy, 0)
}
solution([1, 2, 4, 4, 3])