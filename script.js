const animals = [
  ['🐭','mouse','Jerry'],
  ['🐹','hamster','Biscuit'],
  ['🐰','rabbit','Bugs'],
  ['🦊','fox','Mrs. Fox'],
  ['🐻','bear','Paddington']
]
const food = [
  ['🍎','apple',10],
  ['🍐','pear',12],
  ['🍊','tangerine',15],
  ['🍋','lemon',5],
  ['🍌','banana',7]
]
const universes = [
  ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
  ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

function getInfo(name, array) {
  document.write(`<h1>${name}</h1>`)
let result = ''
  for(let i = 0; i < array.length; i++){

          for(let j = 0; j < array[i].length; j++){
       result = result + (`<tr>
        <td>${array[i][j++]}</td>
        <td>${array[i][j++]}</td>
        <td>${array[i][j++]}</td>
        </tr>`)
    }
  }
  document.write(`<table>${result}</table>`)
} 
getInfo('Animal info',animals)
getInfo('Food info', food)
getInfo('Universe info (DC крутіше)',universes)