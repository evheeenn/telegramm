let submit = document.querySelector('button')
let form = document.querySelector('form')
let orders = document.querySelector('#orders')
let time = Math.round(Math.random() * 70)
const order = {}
submit.addEventListener('click', (event) => {
	let name = document.querySelector('#name')
    let option = document.querySelector('option:checked')
    let textarea = document.querySelector('textarea')
    let radio = document.querySelector('input[name="toppings"]:checked')
	let checkboxes = [...document.querySelectorAll('input[name="spices"]:checked')]
	let selectedValues = checkboxes.map(checkbox => checkbox.value)

	let resultPrice = 0
	let resultCalories = 0

	checkboxes.forEach((el) => {
		resultPrice = resultPrice + (+el.dataset.price)
		resultCalories += resultCalories + (+el.dataset.calories)
	})

	resultPrice += +option.dataset.price + (+radio.dataset.price)
	resultCalories += +option.dataset.calories + (+radio.dataset.calories)
	event.preventDefault()
	order.name = name.value
	order.size = option.value
	order.topping = radio.value
	order.spice = selectedValues
	order.message = textarea.value

	orders.innerHTML += `<div class="order"><p>Hi, ${order.name}! Your order: ${order.size} burger with ${order.topping} and ${order.spice} will be ready for ${time} minutes.</p>
	<p>Price: $${resultPrice}</p>
	<p>Calories: ${resultCalories}</p></div>`
})