let name = prompt('What`s your name?')

let surname = prompt('Surname')

let day = prompt('Birthday?')

let mounth = prompt('Birth mounth?')

const year = prompt('Birth year')

const currentYear = 2022

document.write("User bio:" + " " + name + " " + surname + "," + " " + (currentYear - year) + " " + "years old," + " " )

if(year % 4 == 0 || year % 400 == 0) {
	document.write('(leap year),' + " ")
}
if(mounth==1 && day>=20 || mounth==2 && day<=18) {
	document.write('Aquaris')
}
if(mounth==2 && day>=19 || mounth==3 && day<=20) {
	document.write('Pisces')
}
if(mounth==3 && day>=21 || mounth==4 && day<=19) {
	document.write('Aries')
}
if(mounth==4 && day>=20 || mounth==5 && day<=20) {
	document.write('Taurus')
}
if(mounth==5 && day>=21 || mounth==6 && day<=20) {
	document.write('Gemini')
}
if(mounth==6 && day>=21 || mounth==7 && day<=22) {
	document.write('Cancer')
}
if(mounth==7 && day>=23 || mounth==8 && day<=22) {
	document.write('Leo')
}
if(mounth==8 && day>=23 || mounth==9 && day<=22) {
	document.write('Virgo')
}
if(mounth==9 && day>=23 || mounth==10 && day<=22) {
	document.write('Libra')
}
if(mounth==10 && day>=23 || mounth==11 && day<=21) {
	document.write('Scorpion')
}
if(mounth==11 && day>=22 || mounth==12 && day<=21) {
	document.write('Sagittarius')
}
if(mounth==12 && day>=22 || mounth==1 && day<=19) {
	document.write('Capricorn')
}
