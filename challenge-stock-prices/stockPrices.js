// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

// best([15, 10, 20, 22, 1, 9])
// 12

// If no profit is possible, return $0:

// best([5, 4 , 3, 2, 1])
// 0

////////// CODE HERE //////////

let array = [2, 3, 10, 6, 4, 8, 1];

let theFunction = (array) => {
    let maxProfit = 0;
    let lowestPrice = array[0];
    for (let price of array) {
        if (price < lowestPrice) {
            lowestPrice = price
        }
        maxProfit = Math.max(price - lowestPrice, maxProfit)
    }
    return maxProfit;
}
console.log(theFunction(array));

// FOR OF loops
// for (let value of iterable) {
    // statements;
//}