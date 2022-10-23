let popup = document.querySelector('.popup');
let popupContent = document.querySelector('.popup-content');
let userButton = document.querySelector('.userButton');
let popupClose = document.querySelector('.popup-close');

userButton.onclick = function () {
	popup.style.display = 'block';
}

function close() {
	popup.style.display = 'none';
}

popupClose.onclick = close;

window.onclick = function (event) {
	if (event.target == popup) {
		close();
	}
}