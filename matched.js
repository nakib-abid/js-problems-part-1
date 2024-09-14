// Find the matching product by searching products

// example of loop
// const numbers = [45, 65, 23, 98, 19];
// for(let i = 0; i < numbers.length; i++){
// const number = numbers[i];
// console.log(number);
// }

// another way
// for(const number of numbers){
//     console.log(number);
// }
// ----------------------------------------

const products = [
    {id: 1, name: 'xaomi phone', price: 20000},
    {id: 2, name: 'iphone', price: 20000},
    {id: 3, name: 'mac laptop book', price: 20000},
    {id: 4, name: 'lenovo Laptop', price: 20000},
    {id: 5, name: 'dell', price: 20000},
    {id: 6, name: 'samsung phone', price: 20000},
    {id: 7, name: 'nokia phone', price: 20000},
    {id: 8, name: 'Phone one', price: 20000},
    {id: 9, name: 'asus laptop', price: 20000},
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
     if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product);
     }
    }
    return matched;
}
const result = matchedProducts(products, 'Laptop');
console.log(result);