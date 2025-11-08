document.addEventListener('DOMContentLoaded', () => {
    const btnForm = document.querySelector('.btn_form');
    const inputBox = document.querySelectorAll('.register_input_box');

    const formData = {
        'name' : '',
        'email' : '',
        'password' : '',
    }

    btnForm.addEventListener('click',()=>{
        inputBox.forEach((elem)=>{
            const input = elem.querySelector('input');
            
            formData[input.id] = input.value;
            console.log(formData[input.id]);
        });
        fetch('http://127.0.0.1:8000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // важно!
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Ответ сервера:', data);
            // const token = data.token; // сюда придет токен Redis
            // // сохраняем токен, например в localStorage
            // localStorage.setItem('authToken', token);
        })
        .catch(err => console.error('Ошибка:', err));
    });


});