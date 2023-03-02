const ITCompany = {
  id: 12332129,
  companyName: 'Playtika',
  type: 'product',
  vacancies: [
    {
      frontEnd: {
        salary: 1200
      },
    },
    {
      backEnd: {
        salary: 1500
      },
    },
    {
      scrumMaster: {
        salary: 500
      },
    },
    {
      tester: {
        salary: 600
      },
    }
  ],
  hello: function () {
    document.write(`<div id = "main_div"><p>Hello, my name is ${this.name}, I am ${this.position} in ${this.companyName}</p><div id = "img"></div></div>`)
  },
  unsuccess: function () {
    document.write(`<div id = "main_div"><p>${this.name2}, you have significant skills for ${this.position2} but we hired another developer, let's keep in touch!</p><div id = "img"></div></div>`)
  }
}

const fun = (company) => {
  let name = prompt('What is your name?')
  let position = prompt('Type position')
  let salary = Number(prompt('Type salary'))

  let user
  let ifUserUnsuccess

  for (let key in company) {
    if (key === 'vacancies') {
      company[key].forEach((el) => {
        if (Object.keys(el)[0].toLowerCase() === position.toLowerCase()) {
          if (el[Object.keys(el)[0]].salary >= salary) {
            user = Object.create(ITCompany)
          } else {
            ifUserUnsuccess = Object.create(ITCompany)
          }
        }
      }) 
    }
  }

  if (user) {
    user.name = name
    user.position = position
    user.salary = salary
    user.hello()
  }

  if (ifUserUnsuccess) {
    ifUserUnsuccess.name2 = name
    ifUserUnsuccess.position2 = position
    ifUserUnsuccess.unsuccess()
  }
} 

fun(ITCompany)