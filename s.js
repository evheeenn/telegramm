let email = ''
let password = ''
let error = ''
let count = 3
let success = false

do{ 

	error = ''
	count = count - 1
	email = prompt('Please, write your email')
	password = prompt('Please, write your password')

	if( email.startsWith('@') || email.startsWith(' ') ){
		error = error + 'Email shouldnt start with @ or whitespaces \n'
	}

	if( email.endsWith('@') || email.endsWith(' ') ){
		error = error + 'Email shouldnt ends with @ or whitespaces \n'
	}

	if( email.length > 15 ){
		error = error + 'Email shouldnt be more 15 symbols \n'
	}

	if( !email.match(/[@]/g) ){
		error = error + 'Email must include @ \n'
	}

	if( !email.endsWith('.com') ){
		error = error + 'Email must ends with .com \n'
	}

	if( password.length > 12 || password.length < 4 ){
		error = error + 'Password should be smaller than 12 and bigger than 4 \n'
	}

	if( !password.match( /[A-Z]/g) ){
		error = error + 'Password must contain at least one capital letter \n'
	}

	if(error == ''){
		success = true
	}

	if( error !== '' ){
		alert(error)
	} 

	if( count === 0 && error !== '' ){
		alert(`No more counts cause of: ${error}`)
	}


 
}while(count && error !== '') debugger
console.log('   name'.startsWith('   '))

    if(success){
	document.write('Your account successfully registrated!' + ' ' + 'Your email:' + ' ' + email + ";" + ' ' + 'Your password:' + ' ' + password + ';')
    }
