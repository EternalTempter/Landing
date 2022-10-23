let readMoreArray = document.querySelectorAll('.read-more');
let rollUpArray = document.querySelectorAll('.roll-up');
let feedbackTextArray = document.querySelectorAll('.feedback-text');
let feedbackArray = document.querySelectorAll('.feedback');

for (let i = 0; i < readMoreArray.length; i++) {
	readMoreArray[i].addEventListener('click', function func() {
		readMoreArray[i].style.display = 'none';
		rollUpArray[i].style.display = 'block';
		feedbackArray[i].style.height = '225px';
		if (i == 0) {
			feedbackTextArray[i].innerHTML = 'Брал в подарок другу, очень доволен подарком. Выглядят просто невероятно! Удобно сидят на руке, никак не мешаются при передвижении. Стильный и современный дизайн';
		}
		else if (i == 1) {
			feedbackTextArray[i].innerHTML = 'Великолепное качество, классный дизайн, очень понравились! Пользуюсь уже долго и что самое невероятное, не отстают ни на секунду с момента покупки. Высочайшая точность';
		}
		else if (i == 2) {
			feedbackTextArray[i].innerHTML = 'Покупал в личное использование. Не подвели ни разу, качество на высоте. Запомнилось больше всего невероятное удобство. Ремешок не натирает, сидят плотно, не болтаются';
		}
		else {
			feedbackTextArray[i].innerHTML = 'Часы оправдали все ожидания, удобно сидят на руке и отлично смотрятся. Все вокруг должно быть обзавидовались когда увидели такие стильные часы.';
		}
		
	});
}
for (let i = 0; i < rollUpArray.length; i++) {
	rollUpArray[i].addEventListener('click', function func() {
		readMoreArray[i].style.display = 'block';
		rollUpArray[i].style.display = 'none';
		feedbackArray[i].style.height = '';
		if (i == 0) {
			feedbackTextArray[i].innerHTML = 'Брал в подарок другу, очень доволен подарком. Выглядят просто невероятно!';
		}
		else if (i == 1) {
			feedbackTextArray[i].innerHTML = 'Великолепное качество, классный дизайн, очень понравились!';
		}
		else if (i == 2) {
			feedbackTextArray[i].innerHTML = 'Покупал в личное использование. Не подвели ни разу, качество на высоте.';
		}
		else {
			feedbackTextArray[i].innerHTML = 'Часы оправдали все ожидания, удобно сидят на руке и отлично смотрятся.';
		}
	});
}
