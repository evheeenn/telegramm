class Hamburger {
  #size
  #staff
  #topping
  #spice

  constructor(size, staff) {
    this.#size = size
    this.#staff = staff
  }

  static SMALL_SIZE = {
    price: 50,
    calories: 20
  }

  static BIG_SIZE = {
    price: 100,
    calories: 40
  }

  get size() {
    return this.#size
  }

  set size(value) {
    this.#size = value
  }

  get staff() {
    return this.#staff
  }

  set staff(value) {
    this.#staff = value
  }

  get topping() {
    return this.#topping
  }

  set topping(value) {
    this.#topping = value
  }

  get spice() {
    return this.#spice
  }

  set spice(value) {
    this.#spice = value
  }

  calcPrice() {
    let sum = this.#size.price + this.#staff.price

    if (this.#topping) {
      sum += this.#topping.price
    }

    if (this.#spice) {
      sum += this.#spice.price
    }

    return sum
  }

  calcCal() {
    let sum2 = this.#size.calories + this.#staff.calories

    if (this.#topping) {
      sum2 += this.#topping.calories
    }

    if (this.#spice) {
      sum2 += this.#spice.calories
    }

    return sum2
  }
}

class Staff {
  static CHEESE = {
    price: 10,
    calories: 20
  }

  static POTATO = {
    price: 20,
    calories: 5
  }

  static SALAD = {
    price: 15,
    calories: 10
  }
}

class Topping {
  static MAYO = {
    price: 20,
    calories: 5
  }

  static SPICE = {
    price: 15,
    calories: 0
  }
}

const newHum = new Hamburger(Hamburger.BIG_SIZE, Staff.CHEESE)

newHum.topping = Topping.MAYO
newHum.spice = Topping.SPICE

const id = Math.round(Math.random() * 9999999).toString().padStart(7, '0')
const myBlock = document.getElementById('myBlock')
myBlock.innerHTML = `<h1> Замовлення №${id}</h1><p>Ціна великого бургеру з сиром, майонезом та приправами: ${newHum.calcPrice()} тугриків</p><p>Калорійність: ${newHum.calcCal()} ккал</p><div id = "img"></div>`
