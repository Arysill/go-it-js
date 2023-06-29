const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');
const valueUpdate = document.querySelector("#value")
let counterValue = 0;
buttonMinus.addEventListener('click', () => { 
    counterValue -= 1;
    valueUpdate.textContent = counterValue;
})
buttonPlus.addEventListener('click', () => {
     counterValue += 1;
    valueUpdate.textContent = counterValue;
})