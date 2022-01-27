'use strict';

/*
Создайте файл game01.js
Написать простой игровой бот, который умеет следующее:
Загадывает число от 1 до 100;
предлагает пользователю ввести свой вариант отгадки;
если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
если пользователь вводит правильное число, то бот выводит “Правильно!”;
если пользователь ввел не число, то выводит “Введи число!”;
если пользователь нажимает “Отмена”, то игра заканчивается.
*/


const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

let randomNumber = getRandomNumber();
console.log(randomNumber);

const changePromtText = (promptText) => {
	promptText === '';
	num = +prompt(promptText);
};

const guessNum = () => {
	let num = +prompt('Введите число.');
	console.log(num);

	if (num === 'null' || num === 0) {
		return;
	};

	while (num !== randomNumber) {

		if (typeof num === 'number' && !Number.isNaN(num)) {
			if (num > randomNumber) {
				changePromtText('Меньше!');
				continue;
			};
			if (num < randomNumber) {
				changePromtText('Больше!');
				continue;
			};
			if (num === randomNumber) {
				alert('Правильно!');
				break;
			};
		} else {
			changePromtText('Это не число, введите число!');
		};
	};
};

guessNum();

/*
const guessNum = () => {
	let num = +prompt('Введите число.');
	console.log(num);

	while (num !== randomNumber) {
		if (typeof num === 'number' && !Number.isNaN(num)) {
			if (num > randomNumber) {
				num = +prompt('Меньше!');
				continue;
			};
			if (num < randomNumber) {
				num = +prompt('Больше!');
				continue;
			};
			if (num === randomNumber) {
				alert('Правильно!');
				break;
			}
		} else {
			num = +prompt('Это не число, введите число!');
		}
	}
}
*/

