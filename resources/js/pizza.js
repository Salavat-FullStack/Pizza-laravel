document.addEventListener('DOMContentLoaded', () => {
    const panelSize = document.querySelector('.panel_size');
    const panelBtn = panelSize.querySelectorAll('.panel_btn');
    const pizzaPanel = document.querySelector('.pizza_panel');

    const miniInform = document.querySelector('.mini_inform');

    const pizzaCalories = miniInform.querySelector('.pizza_calories');
    const pizzaWeight = miniInform.querySelector('.weight');
    const thicknesses = miniInform.querySelector('.thicknesses');
    const pizzaSize = miniInform.querySelector('.pizza_size');

    const pricePizza = document.querySelector('.price_pizza');

    const pizzaData = JSON.parse(pizzaPanel.dataset.size);

    console.log(pizzaData);

    panelBtn.forEach(btn =>{
        btn.classList.remove('panel_btn_active');

        if(btn.textContent == pizzaData['size']['name']){
            btn.classList.add('panel_btn_active');
        }

        btn.addEventListener('click',()=>{
            panelBtn.forEach(btn =>{
                btn.classList.remove('panel_btn_active');
            });
            btn.classList.add('panel_btn_active');

            let sizeValue = btn.textContent;
            pizzaData['size'] = pizzaData['sizes'].find(size => size.name == sizeValue);
            calcuSizePrice();
            redactionAttributeTxt('ingredients');
            redactionAttributeTxt('pizza');
        });
    });

    const panelThicknesses = document.querySelector('.panel_thicknesses');
    const panelThickBtn = panelThicknesses.querySelectorAll('.panel_thick_btn');

    panelThickBtn.forEach(btn =>{
        btn.classList.remove('panel_btn_active');

        if(btn.textContent == pizzaData['finelThicknesses']['thickness']){
            btn.classList.add('panel_btn_active');
        }

        btn.addEventListener('click',()=>{
            panelThickBtn.forEach(btn =>{
                btn.classList.remove('panel_btn_active');
            });
            btn.classList.add('panel_btn_active');

            let thicknessValue = btn.textContent;

            pizzaData['finelThicknesses'] = pizzaData['thicknesses'].find(thickness => thickness.thickness == thicknessValue);
            // console.log(thicknessValue);
            // console.log(pizzaData);
        });
    });

    const ingredientCards = document.querySelectorAll('.ingredient_card');

    ingredientCards.forEach(elem => {
        const cardPlus = elem.querySelector('.card_plus');
        const cardMinus = elem.querySelector('.card_minus');
        const cardTitle = elem.querySelector('.card_title').textContent;
        const cardCounter = elem.querySelector('.card_counter');
        const cardPrice = elem.querySelector('.card_price');

        cardPlus.addEventListener('click',()=>{
            pizzaData['ingredients'].forEach(el =>{
                if(el['name'] == cardTitle){
                    el['quantity'] = el['quantity'] + 1;
                    calculationPrice();

                    cardCounter.textContent = el['quantity'];
                    cardPrice.textContent = el['finelPrice'] + ' ₽';
                }
            });
            redactionAttributeTxt('pizza');
        })
        cardMinus.addEventListener('click',()=>{
            pizzaData['ingredients'].forEach(el =>{
                if(el['name'] == cardTitle && el['quantity'] > 0){
                    el['quantity'] = el['quantity'] - 1;
                    calculationPrice();

                    cardCounter.textContent = el['quantity'];
                    cardPrice.textContent = el['finelPrice'] + ' ₽';
                }
            });
            redactionAttributeTxt('pizza');
        })
    })

    function calculationPrice(){
        pizzaData.finelPrice = 0;
        pizzaData.finelCalories = 0;
        pizzaData.finelWeight = 0;

        pizzaData['ingredients'].forEach(el =>{
            el.finelPrice = el.quantity * el.price;
            el.finelCalories = el.quantity * el.calories;
            el.finelWeight = el.quantity * el.weight;

            pizzaData.finelPrice += el.finelPrice;
            pizzaData.finelCalories += el.finelCalories;
            pizzaData.finelWeight += el.finelWeight;
        });

        console.log(pizzaData);
    } 
    function calcuSizePrice(){
        console.log(+pizzaData['size']['increase']);

        if(+pizzaData['size']['increase'] > 0){
            pizzaData['ingredients'].forEach(el =>{
                el.quantity = Math.ceil(el.quantity * +pizzaData['size']['increase']);
            });
            calculationPrice();
        }
    }

    function redactionAttributeTxt(state){
        if(state == 'pizza'){
            pizzaCalories.textContent = pizzaData['finelCalories'] + ' ккал,';
            pricePizza.textContent = 'Цена: ' + pizzaData['finelPrice'] + ' руб.';
            pizzaWeight.textContent = pizzaData['finelWeight'] + ' г';
        }else if(state = 'ingredients'){
            ingredientCards.forEach(elem => {
                const cardCounter = elem.querySelector('.card_counter');
                const cardPrice = elem.querySelector('.card_price');

                pizzaData['ingredients'].forEach(el =>{
                    cardCounter.textContent = el['quantity'];
                    cardPrice.textContent = el['finelPrice'] + ' ₽';
                });
            });
        }

    }

});