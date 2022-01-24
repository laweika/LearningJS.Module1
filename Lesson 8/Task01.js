'use strict';

/*
	Напишите функцию генератор массива случайных чисел в файле task01.js
	Функция принимает один обязательный параметр это количество элементов в массиве и возвращает массив со случайными числами от одного до 100 включительно;
*/

const getRandomNum = randomNum => randomNum = Math.floor(Math.random() * 100) + 1;

console.log(getRandomNum());


const getRandomArr = (arrLength) => {
	let arr = [];
	arr.length = arrLength;

	console.log(arr);

	const result = arr.map(() => {
		arr.splice(0, arrLength, getRandomNum());
	});

	console.log(result);

}
console.log(getRandomArr(7));
