function setClock() {
	const clock = new Date();
	const date = clock.toDateString()
	const hour = clock.getHours()
	const minute = clock.getMinutes()
	const hourSpace = document.getElementById('hour');
	const minuteSpace = document.getElementById('minute')
	const dateSpace = document.getElementById('date')
	hourSpace.innerHTML = hour;
	if( minute < 10) {
		minuteSpace.innerHTML = '0'+minute
	}
	else {
		minuteSpace.innerHTML = minute;
	}
	dateSpace.innerHTML = date;
}
setClock()
setInterval(setClock, 1000)
const themeButton = document.getElementById('theme')
themeButton.addEventListener('click' , setTheme)
let i = 0 
function setTheme(){
	
	const main = document.getElementsByClassName('main')
	if(i === 0){
		main[0].style.background = '#000'
		themeButton.style.background = 'url(res/seascape_icon.gif)'
		i = 1
	}
	else {
		main[0].style.background = 'url(res/seascape.gif) 0 0 / cover'
		themeButton.style.background = '#000'
		i = 0
	}
}