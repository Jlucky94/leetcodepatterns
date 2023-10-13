//Использование поинтеров и цикла while
const solution = (strs) => {
    const hash = {}
    const sorted = strs.map(word => word.split('').sort().join(''))
    console.log(sorted)
    sorted.map((word,i)=> {
        if(hash[word]) {
            hash[word].push(strs[i])
        } else {
            hash[word] = [strs[i]]
        }
    })
    return Object.values(hash)
};
solution(["eat", "tea", "tan", "ate", "nat", "bat"])