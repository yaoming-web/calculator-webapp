var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
 
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

// THEME APPEARANCE
var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(222, 26%, 31%)";
      document.querySelector('.calculator__keys').style.backgroundColor = "hsl(223, 31%, 20%)";
      document.querySelector('.calculator__keys').style.color = "hsl(225, 21%, 49%)";
      document.querySelector('.input').style.backgroundColor = "hsl(224, 36%, 15%)";
      document.querySelector('.input').style.color = "white";
      document.querySelector('.tri-state-toggle').style.backgroundColor = " hsl(223, 31%, 20%)";
      document.querySelector('.btn-1').style.backgroundColor = "hsl(6, 63%, 50%)";
      document.querySelector('.btn-1').style.color = "black";
      document.querySelector('.title-bar').style.color = " white";
      document.querySelector('.reset').style.color = "white";
      document.querySelector('.reset').style.backgroundColor = " hsl(225, 21%, 49%)";
      document.querySelector('.equal').style.backgroundColor = "  hsl(2, 74%, 33%)";
      document.querySelector('.equal').style.color = "white";
      document.querySelector('.delete').style.backgroundColor = "  hsl(225, 21%, 49%)";
      document.querySelector('.delete').style.color = "  white";
      


    } else if (index == 1) {
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(0, 0%, 90%)";
      document.querySelector('.calculator__keys').style.backgroundColor = "hsl(45, 7%, 89%)";
      document.querySelector('.calculator__keys').style.color = "hsl(60, 10%, 19%)";
      document.querySelector('.tri-state-toggle').style.backgroundColor = "hsl(0, 5%, 81%)";
      document.querySelector('.input').style.backgroundColor = "hsl(0, 0%, 93%)";
      document.querySelector('.input').style.color = "hsl(60, 10%, 19%)";
      document.querySelector('.btn-2').style.backgroundColor = " hsl(25, 98%, 40%)";
      document.querySelector('.btn-2').style.color = "black";
      document.querySelector('.title-bar').style.color = " hsl(60, 10%, 19%)";
      document.querySelector('.reset').style.backgroundColor = " hsl(185, 42%, 37%)";
      document.querySelector('.equal').style.backgroundColor = "  hsl(25, 98%, 40%)";
      document.querySelector('.delete').style.backgroundColor = "  hsl(185, 42%, 37%)";
      document.querySelector('.reset').style.color = " white";
      document.querySelector('.equal').style.color = " white";
      
    } else {
      document.getElementsByTagName("body")[0].style.backgroundColor ="hsl(268, 75%, 9%)";
        document.querySelector('.input').style.backgroundColor = "hsl(268, 71%, 12%)";
        document.querySelector('.tri-state-toggle').style.backgroundColor = "hsl(268, 71%, 12%)";
        document.querySelector('.calculator__keys').style.backgroundColor = "hsl(268, 71%, 12%)";
        document.querySelector('.input').style.color = "hsl(52, 100%, 62%)";
        document.querySelector('.btn-3').style.backgroundColor = "hsl(176, 100%, 44%)";
        document.querySelector('.title-bar').style.color = "hsl(52, 100%, 62%)";
        document.querySelector('.reset').style.backgroundColor = " hsl(281, 89%, 26%)";
        document.querySelector('.equal').style.backgroundColor = " hsl(176, 100%, 44%)";
        document.querySelector('.equal').style.color = " black";
        document.querySelector('.delete').style.backgroundColor = "  hsl(281, 89%, 26%)";
        
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

// for numbers
const numbers= document.querySelectorAll('.number');
const display = document.querySelector('.input');
const number = document.querySelector('.number').value;

Array.from(numbers).forEach(function(number) {
  number.addEventListener('click', function(){
    display.value += number.innerHTML;
  });
});
//  for operators

const operators = document.querySelectorAll('.operator')
const operator = document.querySelector('.operator')
Array.from(operators).forEach(function(operator) {
  operator.addEventListener('click', function(){
    display.value += operator.innerHTML;
  });
});

const allClear = document .querySelector('.reset');
allClear.addEventListener('click' ,function(allClear) {
  display.value = '';
})

const Delete = document .querySelector('.delete');
Delete.addEventListener('click' ,function(Delete) {
  display.value = display.value.toString().slice(0,-1);
})

const Evaluate = document.querySelector('.equal');
Evaluate.addEventListener('click' ,function(Evaluate) {
  display.value = eval(display.value);
})


