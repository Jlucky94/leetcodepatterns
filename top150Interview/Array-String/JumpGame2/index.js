//
const solution = (nums) => {
    if (nums.length <= 1) return 0
    const jump = (curPos, jumpCounts) => {
        let bestJump = curPos + nums[curPos]
        if (bestJump >= nums.length - 1) return jumpCounts + 1
        let j = curPos + 1
        let newIndex = curPos + 1
        while (j <= curPos + nums[curPos]) {
            if (j + nums[j] > bestJump) {
                bestJump = j + nums[j]
                newIndex = j
            }
            j++
        }
        jumpCounts++
        return jump(newIndex, jumpCounts)
    }
    return jump(0, 0)
}
console.log(solution([2, 3, 1, 0, 4]))