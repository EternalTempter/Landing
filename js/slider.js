let leftSliderCount = 1;
let rightSliderCount = 1;

let watches = ['images/white_watches.png', 'images/watches.png', 'images/blue_watches.png' ]
let mainWatches = document.querySelector('.main-watches');
let hiddenWatches = document.querySelector('.hidden-watches');
function leftSlider(){
	leftSliderCount -= 1;
	if (leftSliderCount < 0) {
		leftSliderCount = watches.length - 1;
	}
	mainWatches.src = watches[leftSliderCount];
}
function rightSlider(){
	rightSliderCount += 1;
	if (rightSliderCount > watches.length - 1) {
		rightSliderCount = 0;
	}
	mainWatches.src = watches[rightSliderCount];
}
function hiddenLeftSlider(){
	leftSliderCount -= 1;
	if (leftSliderCount < 0) {
		leftSliderCount = watches.length - 1;
	}
	hiddenWatches.src = watches[leftSliderCount];
}
function hiddenRightSlider(){
	rightSliderCount += 1;
	if (rightSliderCount > watches.length - 1) {
		rightSliderCount = 0;
	}
	hiddenWatches.src = watches[rightSliderCount];
}
