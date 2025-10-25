document.addEventListener('DOMContentLoaded', () => {
    const panelSize = document.querySelector('.panel_size');
    const panelBtn = panelSize.querySelectorAll('.panel_btn');
    const pizzaPanel = document.querySelector('.pizza_panel');

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
            // console.log(sizeValue);
            // console.log(pizzaData['sizes'].find(size => size.name == sizeValue));
            pizzaData['size'] = pizzaData['sizes'].find(size => size.name == sizeValue);
            // console.log(pizzaData);
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
    })
});