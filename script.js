const square = document.querySelector('#square')
const sayBems = document.querySelector('#square p')
square.style.left = '193px'
square.style.top = '193px'
document.addEventListener('keydown', (event) => {

	if(event.keyCode === 37){
		square.style.left = parseInt(square.style.left) - 10 + 'px'

		if(parseInt(square.style.left) <= 0){
			sayBems.style.visibility = 'inherit'
			setTimeout(() => {
				sayBems.style.visibility = 'hidden'
				square.style.left = parseInt(square.style.left) + 20 + 'px'
			}, 400)
		}
	}

	if(event.keyCode == 39){
		square.style.left = (parseInt(square.style.left) + 10) + 'px'

		if(parseInt(square.style.left) >= 399){
			sayBems.style.visibility = 'inherit'
			setTimeout(() => {
				sayBems.style.visibility = 'hidden'
				square.style.left = parseInt(square.style.left) - 20 + 'px'
			}, 400)
		}
	}

	if(event.keyCode == 38){
		square.style.top = (parseInt(square.style.top) - 10) + 'px'

		if(parseInt(square.style.top) <= 0){
			sayBems.style.visibility = 'inherit'
			setTimeout(() => {
				sayBems.style.visibility = 'hidden'
				square.style.top = parseInt(square.style.top) + 20 + 'px'
			}, 400)
		}
	}

	if(event.keyCode == 40){
		square.style.top = (parseInt(square.style.top) + 10) + 'px'

		if(parseInt(square.style.top) >= 399){
			sayBems.style.visibility = 'inherit'
			setTimeout(() => {
				sayBems.style.visibility = 'hidden'
				square.style.top = parseInt(square.style.top) - 20 + 'px'
			}, 400)
		}
	}

	
	if(event.keyCode == 32){
		if(parseInt(square.style.top) >= 101){
			square.style.top = (parseInt(square.style.top) - 100) + 'px'
			setTimeout (() => {
				square.style.top = (parseInt(square.style.top) + 100) + 'px'
			},
			2000)
		}
	}

	if(event.keyCode == 17){
		square.style.transform = 'scaleX(1.25) scaleY(0.4)'
		setTimeout (() => {
			square.style.transform = 'scaleX(1) scaleY(1)'
		}, 2000)
	}
})