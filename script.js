let arr = []
let num = 0
let userNumber = false
let result = 0

while(userNumber != true){
	num = prompt('Вкажіть довжину масиву не менше двох і не більше десяти')
	Math.abs(Math.round(num))
	if(num >= 2 && num <= 10){
		userNumber = true
		for(i = 0; i < num; i++){
			arr.push(Math.round(Math.random()*10))
		}
		console.log(arr)
		for(j = 0; j < num; j++){
			result = result + arr[j]
		}
		console.log(result)
	}
}