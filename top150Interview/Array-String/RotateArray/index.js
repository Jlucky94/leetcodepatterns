const solution = (nums, k) => {
    if (nums.length < 2) return nums
    k = k % nums.length
    // for (let i = 0; i < k; i++) {
    //     nums.unshift(nums[nums.length - 1])
    //     nums.pop()
    // }
    nums.splice(0, 0, ...nums.slice(nums.length - k, nums.length))
    nums.splice(nums.length - k, k)
};
solution([1, 2, 3, 4, 5, 6, 7], 3)