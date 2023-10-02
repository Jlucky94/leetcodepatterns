const solution = (nums, val) => {
    let k = 0 // count of val occurrence
    let i = 0 // current pointer

    while (nums.length - i !== k) {
        let lastIndex = nums.length - 1 - k
        let lastNumber = nums[lastIndex]
        if (nums[i] === val) {
            nums[lastIndex] = nums[i]
            nums[i] = lastNumber
            k++
        } else {
            i++
        }
    }
    return nums.length-k
};
solution([3, 2, 2, 3], 3)