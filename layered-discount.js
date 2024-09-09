// Multi-layer discount price calculation

/**
 * first 100 --> 100
 * 101 to 200 --> 90
 * above 200 --> 70
 */

function layeredDiscountedTotal(quantity){
    const first100price = 100;
    const second100price = 90;
    const above200price = 70;
    if(quantity <= 100){
        const total = quantity * first100price;
        return total;
    }
    else if (quantity <= 200){
        const first100total = first100price * 100;
        const remainingquantity = quantity - 100;
        const remainingtotal = remainingquantity * second100price;
        const total = first100total + remainingtotal;
        return total;
    }
    else {
        const first100total = first100price * 100;
        const second100total = second100price * 100;
        const remainingquantity = quantity - 200;
        const remainingtotal = remainingquantity * above200price;
        const total = first100total + second100total + remainingtotal;
        return total;
    }
}

const totalDiscount = layeredDiscountedTotal(300);
console.log('Total discount: ', totalDiscount);