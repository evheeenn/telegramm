class Vegetable {
  constructor(vegList) {
    this.type = 'Vegetable'
    this.name = vegList.name
    this.icon = vegList.icon
    this.price = vegList.price
    this.seasonKoef = 1.3
    this.season = vegList.season !== undefined ? vegList.season : false
  }

  getPrice() {
    if (this.season) {
      return this.price * this.seasonKoef
    } else {
      return this.price
    }
  }

  getInfo() {
    let result = `<li>${this.type}. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.getPrice()}`
    if (this.season) {
      result += ` season: ${this.season}</li>`
    } else {
      result += `</li>`
    }
    return result
  }
}

const vegetables = [
  {
    name: 'tomato',
    icon: '🍅',
    price: 2.3,
    season: false
  },
  {
    name: 'carrot',
    icon: '🥕',
    price: 1.5,
    season: false
  },
  {
    name: 'corn',
    icon: '🌽',
    price: 2.78,
    season: true
  }
]

const vegetableList = vegetables.map((el) => new Vegetable({...el}))
const vegetableInfo = vegetableList.map((veg) => veg.getInfo()).join('')
document.write(`<ul>${vegetableInfo}</ul>`)
