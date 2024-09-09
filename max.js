// Can you find out who will get the delicious cake?
// normal way
const disha = 156;
const salman = 195;

// if(disha > salman){
//     console.log('Disha will get the cake.')
// }
// else {
//     console.log('salman will get the cake.')
// }

// inside a function
function getmax(num1, num2){
    if (num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max1 = getmax(96, 79);
const max2 = getmax(56, 98);
const ultimatemax = getmax(max1, max2);
// console.log('max of two is: ', ultimatemax);

// if the number is three then the solution
const jim = 156;
const tim = 89;
const kim = 168;
// if (jim > tim && jim > kim){
//     console.log('Jim is the ultimate boss');
// }
// else if ( tim > jim && tim > kim){
//     console.log('Tim is the ultimate boss');
// }
// else {
//     console.log('Kim is the ultimate boss');
// }

// inside a function
function maxOfThree(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1;
    }
    else if ( num2 > num1 && num2 > num3){
        return num2;
    }
    else {
        return num3;
    }
}

const maxNumber = maxOfThree(jim, tim, kim);
// console.log('The ultimate boss', maxNumber);

// the max of unlimited number
const max = Math.max(12, 1, 13, 43, 4);
console.log('max using Math.max', max);