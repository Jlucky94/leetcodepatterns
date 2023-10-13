//Алгоритм большинства голосов Бойера — Мура
const solution = (nums) => {
    let candidate = nums[0]
    let votes = 1
    for (let i = 1; i < nums.length; i++) {
        if (votes === 0) {
            candidate = nums[i];
            votes = 1;
        } else if (nums[i] === candidate) {
            votes++;
        } else {
            votes--;
        }
    }
};
solution([2, 2, 1, 1, 1, 2, 2])