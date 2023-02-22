let firstValue = Number(prompt('Введіть перше число'))
let mathSymbol = prompt('Введіть знак')
let secondValue = Number(prompt('Введіть друге число'))

function doMath (x, y, znak) {
   if(znak == '+') {
     alert(x + y)
   } else if(znak == '-') {
     alert(x - y)
   } else if(znak == '*') {
     alert(x * y)
   } else if(znak == '/') {
     alert(x / y)
   } else if(znak == '%') {
     alert(x % y)
   } else if(znak == '^') {
     alert(x ^ y)
   } else {
     alert('NaN')
   }
} 

doMath(firstValue, secondValue, mathSymbol)