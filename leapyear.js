// check whether a year is a leap year or not
// year will be a leap year if the year is divisible by 4 (simple logic) (its not true all time)
function isLeapYear (year){
    if (year % 4 === 0){
        return true;
    }
    else {
        return false;
    }
}
// const isLeap = isLeapYear(2044);
// console.log(isLeap);


// 1. those year that is not divisible by 100 and if the year is divisible by 4 then it will be a leap year.
// 2. if the year is divisible by 400, then it is a leap year.
// 3. else it is not a leap year.
function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 400 === 0){
        return true;
    }
    else {
        return false;
    }
}
const isLeap = isLeapYear2(2400);
const isLeap2 = isLeapYear2(2300);
const isLeap3 = isLeapYear2(2052);
console.log(isLeap, isLeap2, isLeap3);
