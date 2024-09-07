// a simple introduction to js date and time
// todays date
const today = new Date();
console.log(today);

const date = new Date('2062-10-19')
// Month follow index number
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2091, 0, 25);
console.log(specificDate);
// for change
specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleString());
console.log(specificDate.toLocaleString('en-GB'));

// unix epoc --> It measures time by the number of non-leap seconds that have elapsed since 00:00:00 UTC on 1st January 1970, the Unix epoch.