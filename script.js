let body = document.querySelector('body')
let mainWrapper = document.querySelector('#wrapper')
let wrapper = document.querySelector('#jokes-block')
let fromCategories = document.querySelector('input[value="fromcategories"]')
let randomJoke = document.querySelector('#random')
let menuButton = document.querySelector('#menu-button')
let filter = document.querySelector('#filter')
let menuImg = document.querySelector('#menu-img')
let favJokes = document.querySelector('#favourite-jokes-section')
let categoriesListField = document.querySelector('#categories-list')
let clickCount = 0

favJokes.style.height = mainWrapper.style.height

menuButton.addEventListener('click', () => {

	clickCount++
	menuImg.src = 'visual/menu-close.svg'
	favJokes.style.right = '0'
	filter.style.opacity = '1'
	filter.style.display = 'block'
	
	if(clickCount % 2 === 0){
		menuImg.src = 'visual/menu-open.svg'
		favJokes.style.right = '-100%'
		filter.style.opacity = '0'
	    filter.style.display = 'none'
		
	}
})

randomJoke.addEventListener('change', () => {
		input.style.display = 'none'
})

let searchCheckbox = document.querySelector('input[value="search"]')

searchCheckbox.addEventListener('change', () => {
		input.style.display = 'block'
})

let createCategories = (res) => {
	
	res.forEach((el) => {
		let label = document.createElement('label')
		label.textContent = el.toUpperCase()
		label.setAttribute('for', `${el}`)

		let radio = document.createElement('input')
		radio.setAttribute('name', 'radio')
		radio.setAttribute('type', 'radio')
		radio.setAttribute('value', el)
		radio.setAttribute('id', el)
		radio.classList.add('categories')

		label.classList.add('label-categories')
		radio.classList.add('radio-categories')
		
		
		categoriesListField.appendChild(radio)
		categoriesListField.appendChild(label)
		
	})
	console.log(res)
}

let getCategories = () => {
	fetch('https://api.chucknorris.io/jokes/categories')
	.then(res => res.json())
	.then(res => createCategories(res))
}

getCategories()

fromCategories.addEventListener('change', () => {

	categoriesListField.style.display = 'flex'
	categoriesListField.style.opacity = 1

	if(fromCategories.checked == false){
		categoriesListField.style.display = 'none'
		categoriesListField.style.opacity = 0
		wrapper.style.marginTop ='0px'
	}
})

let render = (data) => {
	
	data.forEach(el => {
		
		let created = new Date(el.created_at)
		let now = new Date()
		let milisec = Math.abs(created - now)
		let time = Math.floor(milisec / (1000 * 60 * 60))

		let jokeBlock = document.createElement('div')
		jokeBlock.classList.add('joke-block')
		jokeBlock.dataset.id = el.id

		let like = document.createElement('div')
		like.classList.add('like')

		let likeImg = document.createElement('img')
		likeImg.classList.add('like-img')
		likeImg.setAttribute('src', 'visual/unliked.svg')

		let jokeWrapper = document.createElement('div')
		jokeWrapper.classList.add('joke-wrapper')

		let jokeLogo = document.createElement('div')
		jokeLogo.classList.add('joke-logo')

		let jokeLogoImg = document.createElement('img')
		jokeLogoImg.setAttribute('src', 'visual/joke-img.svg')

		let joke = document.createElement('div')
		joke.classList.add('joke')

		let jokeId = document.createElement('a')
		jokeId.classList.add('joke-id')
		jokeId.textContent= 'ID:'
		
		let jokeIdHref = document.createElement('a')
		jokeIdHref.setAttribute('href', `${el.id}`)
		jokeIdHref.textContent = `${el.id}`

		let jokeText = document.createElement('p')
		jokeText.classList.add('joke-text')
		jokeText.textContent = el.value

		let jokeInfo = document.createElement('div')
		jokeInfo.classList.add('joke-info')

		let jokeDate = document.createElement('p')
		jokeDate.classList.add('joke-date')
		jokeDate.textContent = `Last update: ${time} hours ago`

		wrapper.prepend(jokeBlock)

		jokeBlock.appendChild(like)
		jokeBlock.appendChild(jokeWrapper)
		
		like.appendChild(likeImg)

		if(el.liked){
			favJokes.prepend(jokeBlock)
			likeImg.src = 'visual/like.svg'

			
		jokeBlock.classList.add('joke-block-liked')

		like.classList.add('like-liked')

		likeImg.classList.add('like-img-liked')

		jokeWrapper.classList.add('joke-wrapper-liked')

		jokeLogo.classList.add('joke-logo-liked')

		joke.classList.add('joke-liked')

		jokeId.classList.add('joke-id-liked')

		jokeText.classList.add('joke-text-liked')

		jokeInfo.classList.add('joke-info-liked')

		jokeDate.classList.add('joke-date-liked')

		} else {
			wrapper.prepend(jokeBlock)
		}

		like.addEventListener('click', () => clickHeart(el))

		jokeWrapper.appendChild(jokeLogo)
		jokeWrapper.appendChild(joke)

		jokeLogo.appendChild(jokeLogoImg)

		joke.appendChild(jokeId)

		jokeId.appendChild(jokeIdHref)
		joke.appendChild(jokeText)
		joke.appendChild(jokeInfo)

		jokeInfo.appendChild(jokeDate)
	})

}

let getRandomJoke = () => 
    fetch('https://api.chucknorris.io/jokes/random')

let getJokeByCategory = (category) => 
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)

let getFreeSpeach = (word) => 
	fetch(`https://api.chucknorris.io/jokes/search?query=${word}`)


let form = document.querySelector('form')
let input = document.querySelector('input[type="text"]')
let button = document.querySelector('button')

form.addEventListener('submit', (event) => {
	
	event.preventDefault()
	let radio = document.querySelector('.categories:checked')
	if(radio.checked == true){
		getJokeByCategory(radio.value)
		.then((res => res.json()))
		.then((res => render([res])))

	} else if (randomJoke.checked == true){
		getRandomJoke()
		.then((res => res.json()))
		.then((res => render([res])))
	}
	
	getFreeSpeach(input.value)
	.then(res => res.json())
	.then(res => render(res.result))

	input.value = ''
})
let clickHeart = (data) => {
	let img = document.querySelector(`.joke-block[data-id="${data.id}"] .like-img`)
	let store = getStore()
	if(img.src.includes('unliked')){
		img.src = 'visual/like.svg'
		setFavourite(data)

	} else {
		img.src = 'visual/unliked.svg'
		removeFavourite(data, store)
	}
}

let setFavourite = (data) => {
	let store = getStore()
	if(store.findIndex(el => el.id === data.id) < 0) {
		store.push({...data, liked: true})
		localStorage.setItem('favourite', JSON.stringify(store))
	    render([{...data, liked: true}])
	}
}

let getStore = () => JSON.parse(localStorage.getItem('favourite')) ?? []

let removeFavourite = (data, store) => {
	let updatedStore = store.filter(el => el.id !== data.id)
	localStorage.setItem('favourite', JSON.stringify(updatedStore))

	favJokes.querySelector(`.joke-block[data-id="${data.id}"]`).remove()

	let img = document.querySelector(`.joke-block[data-id="${data.id}"] .like-img`)
	img.src = 'visual/unliked.svg'
}

let renderFavourite = () => {
	let store = getStore()
	render(store)
	console.log(store)
}

renderFavourite()