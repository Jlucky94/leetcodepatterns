//Надо заметить что массив отсортирован, а это значит что дубликаты будут стоять рядом друг с другом.
const solution = (nums) => {
    let i = 0; //unique num counter (allow 2 occurrence)

    for (let j = 1; j < nums.length; j++) {
        let isSecondOccurrence = nums[i] === nums[j] && nums[i] !== nums[i - 1]
        if (nums[i] !== nums[j] || isSecondOccurrence) {
            i++;
            nums[i] = nums[j];
        }
        console.log(nums)
    }

    console.log(nums, nums.length)

};
solution([1, 1, 1, 2, 2, 2, 3, 3, 3, 4,5,6,7,7,7,8])