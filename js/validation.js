let errorInputName = document.querySelector('#error_input_name');
let errorInputTel = document.querySelector('#error_input_tel');
let errorInputEmail = document.querySelector('#error_input_email');
let errorInputLetter = document.querySelector('#error_input_letter');
let errorInputSubmit = document.querySelector('#error_input_submit');

let nameInput = document.querySelector('.name-input');
let telInput = document.querySelector('.tel-input');
let emailInput = document.querySelector('.email-input');
let letterInput = document.querySelector('.letter-input');

let orderButton = document.querySelector('.order-button');
function checkName(name) {
	if (name.length > 12) {
		errorInputName.style.display = "inline";
		errorInputName.innerHTML = "Имя не может быть больше 12-ти символов";
	} else if (name.length < 1) {
		errorInputName.style.display = "inline";
		errorInputName.innerHTML = "Имя не может быть меньше 1-го символа";
	} else errorInputName.style.display = "none";
}
function checkTel(tel){

}
function checkEmail(email) {
	let inputEmail = document.querySelector('#input_email');
	console.log(inputEmail.value.includes('@'));
	if (!inputEmail.value.includes('@')) {
		errorInputEmail.style.display = "inline";
		errorInputEmail.innerHTML = "Email должен содержать знак '@'";
	} else errorInputEmail.style.display = "none";
}

function checkLetter(letter) {
	let inputLetter = document.querySelector('#input_letter');
	let inputLetterValue = inputLetter.value;
	errorInputLetter.style.display = "block";
	errorInputLetter.style.color = '#FBFFFE';
	errorInputLetter.innerHTML = 'У вас осталось - ' +
		(255 - inputLetterValue.length) + ' букв';
	if (inputLetterValue.length > 255) {
		errorInputLetter.style.color = '#c00';
		errorInputLetter.innerHTML = 'Ввести можно не более 255-ти букв';
	}
}

function agreeForm(){
	if (errorInputName.style.display = "none" && 
		errorInputEmail.style.display == "none" &&
		letterInput.value.length < 255 && 
		nameInput.value != '' &&
		telInput.value != '' &&
		emailInput.value != '' &&
		letterInput.value != '') 
	{
		errorInputSubmit.style.display = 'none';
		nameInput.value = '';
		telInput.value = '';
		emailInput.value = '';
		letterInput.value = '';
		errorInputLetter.style.display = "none";

		alert('Успешно отправлено!');
	}
	else{
		errorInputSubmit.style.display = 'block';
	}
}