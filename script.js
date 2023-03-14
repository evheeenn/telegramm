const SINGLE_LIST_HEAD = {
  value: 0,
  next: null
}

function singleListFunction(...values) {

  let currentObject = SINGLE_LIST_HEAD

  for( let value of values){

    const newObject = {
      value,
      next: null
    }
    
    currentObject.next = newObject
    currentObject = newObject
  }
}

const DEFAULT_PARAMETERS = [1, 'two', () => console.log('hello'), true]
singleListFunction(...DEFAULT_PARAMETERS)

console.log(SINGLE_LIST_HEAD.next)

