let closeBurgerMenu = document.querySelector('.close-burger-menu');
let openBurgerMenu = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger-menu');

openBurgerMenu.addEventListener('click',function(){
	closeBurgerMenu.style.color = '#c00';
	openBurgerMenu.style.display = 'none';
	burgerMenu.style.display = 'block';
});
closeBurgerMenu.addEventListener('click',function(){
	burgerMenu.style.display = 'none';
	openBurgerMenu.style.display = 'block';
});