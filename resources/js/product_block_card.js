document.addEventListener('DOMContentLoaded', () => {

const productBlock = document.querySelector('.product_block');
const productData = JSON.parse(productBlock.dataset.product_block);
const productPluses = document.querySelectorAll('.product_plus');
const productMinuses = document.querySelectorAll('.product_minus');
const productCounter = document.querySelector('.product_counter');
// const productPrice = document.querySelector('.product_price');

console.log(productData);

productData.quantity = 1;

productPluses.forEach(element =>{
    element.addEventListener('click',()=>{
        // console.log('plus');
        productData.quantity++;
        // console.log(productData.quantity);
        productCounter.textContent = productData.quantity;
        productData.price = productData.price * productData.quantity;
    })
});

productMinuses.forEach(element =>{
    element.addEventListener('click',()=>{
        // console.log('minus');
        if(productData.quantity > 1){
            productData.quantity--;
            productData.price = productData.price * productData.quantity;
        }
        // console.log(productData.quantity);
        productCounter.textContent = productData.quantity;
    })
});

console.log(productData);

});