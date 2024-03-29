function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  amountEl: document.querySelector('#controls input'),
  createEl: document.querySelector('button[data-create]'),
  destroyEl: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes')
}

function createBoxes(amount) {
  for(var i = 0; i < amount; i++) {
    var elem = document.createElement('div');
    
    elem.style.width = 30 + (10 * i)+'px';
    elem.style.height = 30+'px';
    elem.style.backgroundColor = getRandomHexColor();
    
    refs.boxesEl.append(elem);
  }
}

refs.createEl.addEventListener('click', function() {
  var amount = refs.amountEl.value;
  if(amount > 0) {
    createBoxes(amount);
  }
});

refs.destroyEl.addEventListener('click', function() {
  refs.boxesEl.innerHTML = '';
});
