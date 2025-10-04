document.addEventListener('DOMContentLoaded', () => {

const filterContainer = document.querySelector('.main_filter_block');
const filterPanel = document.querySelector('.filter_panel');
const filterBtns = document.querySelectorAll('.filtr_btn');
const btnMore = document.querySelector('.more_filter_btn');

let totalWidth = 0;

filterBtns.forEach(filt => {
  totalWidth += filt.offsetWidth;
});

if (totalWidth > 700) {
    btnMore.classList.add('active');
    console.log(filterBtns.length);
    let i = 0;
    filterBtns.forEach(btn =>{
        i++;
        if(i > 7){
            btn.classList.add('display_none');
        }
    })
}

});