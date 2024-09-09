// Find the cheapest phone from an array
const prices = [20000, 16000, 50000, 100000, 12000, 30000, 10000];

function getMin(numbers){
    let min = numbers[0];
    for(num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const cheap = getMin(prices);
console.log('The cheapest one is:', cheap);