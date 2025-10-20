document.addEventListener('DOMContentLoaded', () => {

const productBlock = document.querySelector('.product_block');
const productData = JSON.parse(productBlock.dataset.product_block);
// const productPrice = document.querySelector('.product_price');
console.log('productData');
console.log(productData);

const productCards = document.querySelectorAll('.product_card');

productCards.forEach(card =>{
    const productMinuses = card.querySelector('.product_minus');
    const productPluses = card.querySelector('.product_plus');
    const pizzaName = card.querySelector('.pizza_name');
    const productCounter = card.querySelector('.product_counter');
    const productPrice = card.querySelector('.product_price');

    const thisData = productData.filter(el => el.name == pizzaName.textContent)[0];

    productPluses.addEventListener('click',()=>{
        thisData.finelPrice = 0;

        thisData.quantity++;
        thisData.ingredients.forEach(el =>{
            el.quantity++;
            el.finelPrice = +el.price * el.quantity;
        });
        // console.log(thisData.ingredients);

        thisData.ingredients.forEach(el =>{
            thisData.finelPrice += +el.price * el.quantity;
        })  
        // console.log(thisData.finelPrice);

        productCounter.textContent = thisData.quantity;
        productPrice.textContent = `от ${ thisData.finelPrice } ₽`;
    })

    productMinuses.addEventListener('click',()=>{
        console.log(thisData);

        if(thisData.quantity > 1){
            thisData.finelPrice = 0;

            thisData.quantity--;
            thisData.ingredients.forEach(el =>{
                el.quantity--;
                el.finelPrice = +el.price * el.quantity;
            });
            // console.log(thisData.ingredients);

            thisData.ingredients.forEach(el =>{
                thisData.finelPrice += +el.price * el.quantity;
            })  
            // console.log(thisData.finelPrice);

            productPrice.textContent = `от ${ thisData.finelPrice } ₽`;
        }
        productCounter.textContent = thisData.quantity;
    })
})
// console.log(productData);
// pizzaData.push(productData);
// console.log('pizzaData');
// console.log(pizzaData);
});