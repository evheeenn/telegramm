const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
}

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

const userMoneyKeys = Object.keys(userData)
const bankDataKeys = Object.keys(bankData)

	let promise = new Promise((resolve, reject) => {
		let checkBalance = prompt('Подивитися баланс на карті?')

		if(checkBalance.toUpperCase() === 'ТАК'){
			resolve()
		} else {
			reject()
		}
	})

	promise.then(
		(res) => {
			let answer = ''

			while(!userMoneyKeys.includes(answer.toUpperCase())){
				answer = prompt('Оберіть доступну валюту')
			}

			console.log(`Баланс становить: ${userData[answer]} ${answer}`)
		},

		(rej) => {
			let rejAnswer = ''
			let moneyAnswer = ''

			while(!userMoneyKeys.includes(rejAnswer.toUpperCase())){
				rejAnswer = prompt('Введіть валюту')
			}

			moneyAnswer = prompt('Введіть суму')

			if(moneyAnswer > bankData[rejAnswer]['max'] || moneyAnswer > userData[rejAnswer]){
				console.log(`Введена сума більша за доступну. Максимальна сума зняття для цієї валюти: ${bankData[rejAnswer]['max']}`)
			} else if(moneyAnswer < bankData[rejAnswer]['min']){
				console.log(`Введена сума менша за доступну. Мінімальна сума зняття для цієї валюти: ${bankData[rejAnswer]['min']}`)
			} else {
				console.log(`От ваші ${moneyAnswer} ${rejAnswer} ${bankData[rejAnswer]['img']}`)
			}
		})

		.finally(
			(_ => console.log('Дякую, гарного дня 😊'))
		)