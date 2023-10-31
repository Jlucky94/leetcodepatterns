//
const solution = (nums) => {
    if(nums.length===1) return true
    const penultimate = nums.length - 2
    let l = 1
    for (let i = penultimate; i >= 0; i--) {
        if (nums[i] >= l) {
            if (i === 0) return true
            l=1
        } else {
            if (i === 0) return false
            l++
        }
    }
}
console.log(solution([3, 2, 1, 0, 4]))