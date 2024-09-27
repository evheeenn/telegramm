const mainArray = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 

//Task 1
  let result = 0
for(i = 0; i < mainArray.length; i++){
  if(mainArray[i] > 0){
    result = mainArray[i] + result
  }
} console.log('1. Сума додатних чисел =' + ' ' + result)

  let result_2 = 0
for(j = 0; j < mainArray.length; j++){ 
  if(mainArray[j] > 0){
    result_2++
  }
} console.log('Кількість додатних чисел =' + ' ' + result_2)
//Task 2
   let min = mainArray[0]
   let index = 0
for(a = 0; a < mainArray.length; a++){
    if(mainArray[a] < min){
        min = mainArray[a]
        index = a
    }
} console.log('2. Мінімальне число = ' + min)
console.log('Індекс мінімального числа = ' + index)
//Task 3 
   let max = mainArray[0]
   let index_2 = 0
for(b = 0; b < mainArray.length; b++){
    if(mainArray[b] > max){
        max = mainArray[b]
        index_2 = b
    }
} console.log('3. Максимальне число = ' + max)
console.log('Індекс максимального числа = ' + index_2)
//Task 4
   let result_3 = 0
for(c = 0; c < mainArray.length; c++){ 
  if(mainArray[c] < 0){
    result_3++
  }
} console.log('4. Кількість від`ємних чисел = ' + result_3)
//Task 5
   let result_4 = 0
for(d = 0; d < mainArray.length; d++){
  if(mainArray[d] > 0 && mainArray[d] % 2 !== 0){
    result_4++
  }
} console.log('5. Кількість непарних додатних елементів = ' + result_4)
//Task 6
   let result_5 = 0
for(e = 0; e < mainArray.length; e++){
  if(mainArray[e] > 0 && mainArray[e] % 2 == 0){
    result_5++
  }
} console.log('6. Кількість парних додатних елементів = ' + result_5)
//Task 7
   let result_6 = 0
for(f = 0; f < mainArray.length; f++){
  if(mainArray[f] > 0 && mainArray[f] % 2 == 0){
    result_6 = mainArray[f] + result_6
  }
} console.log('7. Сума парних додатних елементів = ' + result_6)
//Task 8
   let result_7 = 0
for(g = 0; g < mainArray.length; g++){
  if(mainArray[g] > 0 && mainArray[g] % 2 !== 0){
    result_7 = mainArray[g] + result_7
  }
} console.log('8. Сума непарних додатних елементів = ' + result_7)
//Task 9
  let result_8 = 1
for(h = 0; h < mainArray.length; h++){
  if(mainArray[h] > 0){
    result_8 = mainArray[h] * result_8
  }
} console.log('9. Добуток додатних чисел =' + ' ' + result_8)
//Task 10
   let max_2 = mainArray[0]
for(k = 0; k < mainArray.length; k++){
    if(mainArray[k] > max){
        max_2 = mainArray[k]
    }
    if(mainArray[k] !== max){
      mainArray[k] = 0
    }
} console.log('10. Результат: ' + mainArray)  