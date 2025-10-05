document.addEventListener('DOMContentLoaded', () => {

const sortingPanel = document.querySelector('.sorting_panel');
const sortingData = JSON.parse(sortingPanel.dataset.sorting);
const sortingText = document.querySelector('.sorting_text');
const btnSorting = document.querySelector('.sorting_panel');
const dropMenu = document.querySelector('.drop_menu');


sortingText.textContent = sortingData[0].name;

console.log(sortingData);
console.log(sortingData[0].name);

btnSorting.addEventListener('click',()=>{
    dropMenu.innerHTML = '';
    dropMenu.classList.toggle('active');
    dropMenu.classList.toggle('display_none');


    const sortingValue = sortingText.textContent;
    const sortingArray = sortingData.filter(item => item.name !== sortingValue);

    sortingArray.forEach(elem =>{
        const sortItem = document.createElement('div');
        sortItem.textContent = elem.name;

        dropMenu.append(sortItem);
    });
});

});
