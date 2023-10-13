//Использование поинтеров и цикла while
const solution = (prices) => {
    let profit = 0
    let curStock = prices[0]
    for (let i = 1; i < prices.length; i++) {
        let curProfit = prices[i]-curStock
        if(curProfit>0){
            profit+=prices[i]-curStock
        }
        curStock=prices[i]
    }
};
solution([7, 1, 5, 3, 6, 4])