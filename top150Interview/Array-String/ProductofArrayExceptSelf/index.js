//Использование 2 массивов (произведение всех чисел слева и справа)
const solution = (nums) => {
    const n = nums.length
    const answer = new Array(n)
    answer[0] = 1
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1]
    }
    let right = 1
    for (let i = n - 1; i >= 0; i--) {
        answer[i] = answer[i] * right
        right = right * nums[i]
    }
    return answer


};
solution([1, 2, 3, 4])