'use strict';

/*
	Напишите функцию генератор массива случайных чисел в файле task01.js
	Функция принимает один обязательный параметр это количество элементов в массиве и возвращает массив со случайными числами от одного до 100 включительно;
*/

const getRandomNum = () => Math.floor(Math.random() * 100) + 1;

console.log(getRandomNum());



const getRandomArr = (arrLength) => {
	let arr = [];
	arr.length = arrLength;

	for (let i = 0; i < arrLength; i++) {
		arr[i] = getRandomNum();
	}

	console.log(arr);
}

getRandomArr(10);
