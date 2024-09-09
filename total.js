// Calculate the total cost of the products

const products = [
    {name: 'shampoo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 900},
    {name: 'pant', price: 1200},
]

function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        // console.log(product);
        total = total + product.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('Total: ', total);