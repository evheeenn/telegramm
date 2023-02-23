const obj = {
    x: 10,
    y: 20,
    inner: {
        m: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
} 

const obj2 = {}

const convert = (...rest) => {
  for(let key in obj){
    if(typeof obj[key] === 'number') {
      obj2[key] = obj[key]
    } else if(typeof obj[key] === 'object'){
      for(let key2 in obj[key]){
        if(typeof obj[key][key2] === 'number'){
          obj2[key2] = obj[key][key2]
        }
      }
    }
  }
  return(obj2)
}
convert(obj, obj2)
console.log(convert(obj2))