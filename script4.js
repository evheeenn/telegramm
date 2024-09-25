let string = prompt('Впишіть рядок')
let letters = prompt('Впишіть символи для видалення')
let result = ''
function formatter (str, letters) {
  for(let i = 0; i < str.length; i++){
    if(!letters.includes(str[i])){
      result = result + str[i].toUpperCase()
    }
  }
  console.log(result)
}
formatter(string,letters)