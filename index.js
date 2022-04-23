const textboxEl2 = document.getElementById('textboxjs2');
const textboxEl3 = document.getElementById('textboxjs3');
const textboxEl4 = document.getElementById('textboxjs4');
const textboxEl5 = document.getElementById('textboxjs5');
const textboxEl6 = document.getElementById('textboxjs6');

let decrementTimer = null;
let incrementTimer = null;

function increase(element) {
    count = Number(element.innerText)
    count += 1
    element.innerText = count
}
function decrease (element) {
    count = Number(element.innerText)
    count -= 1
    element.innerText = count
}

function decreaseAll() {
  
  decrease(textboxEl2);
  decrease(textboxEl3);
  decrease(textboxEl4);
  decrease(textboxEl5);
  decrease(textboxEl6);

}

function increaseAll() {
  
  increase(textboxEl2);
  increase(textboxEl3);
  increase(textboxEl4);
  increase(textboxEl5);
  increase(textboxEl6);

}

function decrementMouseEnterHandler() {
  
  decrementTimer = setInterval(function aMomentLater() {

    decreaseAll();

  }, 10);

}

function decrementMouseLeaveHandler() {
  
  clearInterval(decrementTimer);

}

function incrementMouseEnterHandler() {
  
  incrementTimer = setInterval(function aMomentLater() {

    increaseAll();

  }, 10);

}

function incrementMouseLeaveHandler() {
  
  clearInterval(incrementTimer);

}
