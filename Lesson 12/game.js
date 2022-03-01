'use strict';

/*
Переписать игровой бот из 8-го задания
Функционал остаётся прежний, но вместо цикла (while или for) используйте рекурсию
*/


const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

let randomNumber = getRandomNumber();
console.log(randomNumber);

const guessNum = () => {
	let num = +prompt('Введите число.');
	console.log(num);

	if (num === 'null' || num === 0) {
		return;
	};

	if (typeof num === 'number' && !Number.isNaN(num)) {
		if (num > randomNumber) {
			alert('Меньше!');
			guessNum();
		};
		if (num < randomNumber) {
			alert('Больше!');
			guessNum();
		};
		if (num === randomNumber) {
			alert('Правильно!');
			return;
		}
	} else {
		alert('Это не число, введите число!');
		guessNum();
	}
}


guessNum();

