let likes = document.querySelectorAll('.likes');
let setLike = document.querySelectorAll('.setlike');
let filledLikes = document.querySelectorAll('.liked');

for (let i = 0; i < likes.length; i++) {
	likes[i].innerHTML = getRandomNumber(1, 10);
}

for (let i = 0; i < setLike.length; i++) {
	setLike[i].addEventListener('click', function func() {
		likes[i].innerHTML = Number(likes[i].innerHTML) + 1;
		setLike[i].style.display = 'none';
		filledLikes[i].style.display = 'block';
	});
}
for (let i = 0; i < filledLikes.length; i++) {
	filledLikes[i].addEventListener('click', function func() {
		likes[i].innerHTML = Number(likes[i].innerHTML) - 1;
		setLike[i].style.display = 'block';
		filledLikes[i].style.display = 'none';
	});
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}