const arr = [1, 2, 3 , 'hello', 'JavaScript', 4, 5, 6, 7, 8, 9, 10, ['hi', 'hello']]
let sum = 0
let result = 0

function fun (array) {
  const onlyNumbers = arr.filter(
    element => typeof element === 'number'
  )
  for(let i = 0; i < onlyNumbers.length; i++){
    sum = onlyNumbers[i] + sum
    result = sum / onlyNumbers.length
  }
  console.log(result)
}
fun(arr)

