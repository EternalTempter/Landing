let newYearDate = new Date(2023, 0, 1, 0, 0, 0);

function getDate() {
	let currentDate = new Date();
	let differenceBtwDates = newYearDate - currentDate;

	let differenceInDays = Math.floor(differenceBtwDates / 1000 / 60 / 60 / 24);
	let differenceInHours = Math.floor(differenceBtwDates / 1000 / 60 / 60) % 24;
	let differenceInMinutes = Math.floor(differenceBtwDates / 1000 / 60) % 60;
	let differenceInSeconds = Math.floor(differenceBtwDates / 1000) % 60;

	document.querySelector('.days').innerHTML = addZero(differenceInDays);
	document.querySelector('.hours').innerHTML = addZero(differenceInHours);
	document.querySelector('.minutes').innerHTML = addZero(differenceInMinutes);
	document.querySelector('.seconds').innerHTML = addZero(differenceInSeconds);
}
getDate();
setInterval(getDate, 1000);

function addZero(difference) {
	if (difference <= 9)
		return '0' + difference;
	else {
		return difference;
	}
}