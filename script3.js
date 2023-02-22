function fun() {
  let fatherArray = Number(prompt('Довжина загального масиву'))
  let babyArray = Number(prompt('Довжина вкладеного масиву'))

  arr = new Array(fatherArray)

  for(i = 0; i < fatherArray; i++){
    arr[i] = new Array(babyArray)
    for(j = 0; j < babyArray; j++){
      let value = Number(prompt('Заповніть массив числами'))
      arr[i][j] = value
    }
  }
  return arr
}
let readyArray = fun()

console.log(readyArray)