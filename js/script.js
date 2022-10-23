"use strict";

/*----------------------------*/
/*-----GET-UP/DOWN-BUTTONS----*/
/*----------------------------*/
let getDownButton = document.querySelector(".get-down-button")
let getUpButton = document.querySelector(".get-up-button")
let links = document.querySelectorAll('a[href^="#"]');

for (let link of links) {
	link.addEventListener('click', function a(event) {
		event.preventDefault();
		var item = link.getAttribute('href');

		document.querySelector(item).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})

	})
}

let body = document.querySelector("body")
window.onclick = function (event) {
	body.scrollIntoView ({
		behavior: 'auto',
	})
}

/*----------------------------*/
/*--------ANIMATIONS----------*/
/*----------------------------*/

function gt(){
	if(count.innerHTML < 38500){
		count.innerHTML = Number(count.innerHTML) + 1;

	}
}
let count = document.querySelector('.kolvo');
gt();
setInterval(gt,6000);



getDownButton.style.opacity = '0';
let rightSliderArrow = document.querySelector('#right-slider-arrow');
rightSliderArrow.style.opacity = '0';
let secondsArrow = document.querySelector('.second-arrow');
let clockBg = document.querySelector('.clock-bg');
if (window.screen.width > 768) {
	var moveArrowInterval = setInterval(moveArrow,1000);
	let times = 0;
	let currentRotate = 170;
	let currentOpacity = 100;
	function moveArrow(){
		if (times < 3) {
			currentRotate += 15;
			times++;
			secondsArrow.style.transform = 'rotate(' + currentRotate + 'deg)';
		}
		else{
			clearInterval(this);
			var turnOffInterval = setInterval(turnOff,20);
		}
	}
	function turnOff(){
		if(currentOpacity > 0){
			currentOpacity -= 4;
			clockBg.style.opacity = String(currentOpacity) + '%';
		}
		else{
			getDownButton.style.opacity = '1';
			rightSliderArrow.style.opacity = '1';
			clearInterval(this);
			clockBg.style.display = 'none';
		}
	}
}
else{
	clockBg.style.display = 'none';
}
