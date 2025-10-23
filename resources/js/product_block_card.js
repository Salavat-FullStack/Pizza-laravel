document.addEventListener('DOMContentLoaded', () => {

const token = document.querySelector('meta[name="csrf-token"]').content;
console.log(token);

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
    const imgContainer = card.querySelector('.img_container');

    console.log(imgContainer);
    imgContainer.addEventListener('click',()=>{
        setCookiePizza(thisData);
    })

    const thisData = productData.filter(el => el.name == pizzaName.textContent)[0];

    productPluses.addEventListener('click',()=>{
        console.log(thisData);
        thisData.finelPrice = 0;
        thisData.finelWeight = 0;

        thisData.quantity++;
        thisData.ingredients.forEach(el =>{
            el.quantity++;
            el.finelPrice = +el.price * el.quantity;
            el.finelCalories = +el.calories * el.quantity;
            el.finelWeight = +el.weight * el.quantity;
            thisData.finelWeight += +el.finelWeight;
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
            thisData.finelWeight = 0;

            thisData.quantity--;
            thisData.ingredients.forEach(el =>{
                el.quantity--;
                el.finelPrice = +el.price * el.quantity;
                el.finelCalories = +el.calories * el.quantity;
                el.finelWeight = +el.weight * el.quantity;
                thisData.finelWeight += +el.finelWeight;;
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


async function setCookiePizza(data) {
    const response = await fetch("http://localhost/my-pet-project/public/api/v1/setCookiePizza", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": token
        },
        body: JSON.stringify(data),
        credentials: "include" // ✅ обязательно, чтобы cookie сохранялись
    });

    // const dataResponse = await response.json();
    console.log(response);

    // if (dataResponse.redirect_url) {
    //     window.location.href = dataResponse.redirect_url;
    // } else {
    //     console.log("Пицца выбрана:", dataResponse);
    // }
    // await new Promise(resolve => setTimeout(resolve, 300)); // 🕒 задержка
    // getSelectedPizza();
    getCookiePizza();
}

async function getCookiePizza() {
    const response = await fetch("http://localhost/my-pet-project/public/api/v1/getCookiePizza", {
        method: "GET",
        credentials: "include" // ✅ тоже обязательно
    });

    console.log(response);
    console.log(document.cookie);

    // const data = await response.json();
    // console.log("Выбранная пицца:", data.selected_pizza);
}

});