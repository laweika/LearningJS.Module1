'use strict';

/*
	Добавьте 4-ый опциональный параметр у функции
	  4-ый опциональный параметр это строка:
	если функция получает 'even', то функция возвращает массив чётных чисел
	если функция получает 'odd', то функция возвращает массив нечётных чисел

*/


const getRandomArr3 = (arrLength, n, m, str) => {
	let arr = [];
	let filteredArr = [];

	const max = Math.max(n, m);
	const min = Math.min(n, m);

	for (let i = 0; i < arrLength; i++) {
		arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
	}

	console.log(arr);


	if (str === 'even') {
		filteredArr = arr.filter((num) => num % 2 === 0);
	}

	if (str === 'odd') {
		filteredArr = arr.filter((num) => num % 2 !== 0)
	}

	return filteredArr;
}


console.log(getRandomArr3(10, 20, 40, 'even'));