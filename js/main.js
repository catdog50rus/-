const body = document.body;
const newyear = new Date().getFullYear();
const newYearSrting = 'January 01 ' +  (newyear + 1) + ' 00:00:00';
const newYear = new Date(newYearSrting);
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


setInterval(updateCountdown, 1000)
setInterval(createSnowFlake, 100);


function updateCountdown() {
	const nowTime = new Date();
	const diff = newYear - nowTime;
	const days = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(diff / 1000 / 60) % 60;
	const seconds = Math.floor(diff / 1000) % 60;
	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours < 10 ? '0'+hours : hours;
	minutesEl.innerHTML = minutes < 10 ? '0'+minutes : minutes;
	secondsEl.innerHTML = seconds < 10 ? '0'+seconds : seconds;
}

function createSnowFlake() {
	const snow_flake = document.createElement('i');
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');
	snow_flake.style.left = Math.random() * window.innerWidth-20 + 'px';
	snow_flake.style.animationDuration = Math.random() * 3 + 7 + 's'; // between 2 - 5 seconds
	snow_flake.style.opacity = Math.random();
	snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
	snow_flake.style.maxHeight = window.innerHeight;
	
	document.body.appendChild(snow_flake);
	
	setTimeout(() => {
		snow_flake.remove();
	}, 50000)
}
