//Надо заметить что массив отсортирован, а это значит что дубликаты будут стоять рядом друг с другом.
const solution = (nums) => {
    // const obj = {}
    // let i = 0
    //
    // while (i < nums.length) {
    //     if (obj[nums[i]]) {
    //         nums.splice(i, 1)
    //     } else {
    //         obj[nums[i]] = 1
    //         i++
    //     }
    //     console.log(nums)
    // }


    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
        console.log(nums)
    }

    console.log(nums,nums.length)

};
solution([1, 1, 1, 2])