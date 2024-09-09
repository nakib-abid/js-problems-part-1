// who is the tallest ? find the max number in an array.

function getmax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const heights = [65, 66, 68, 72, 78, 60];
const max = getmax(heights);
console.log('max value is:', max);
// -----------------------

// who is the tallest ? find the max number in an array.

function getmin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const numbers = [65, 66, 68, 72, 78, 60];
const min = getmin(numbers);
console.log('min value is:', min);