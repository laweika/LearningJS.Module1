'use strict';

/*
	Добавьте 4-ый опциональный параметр у функции
	  4-ый опциональный параметр это строка:
	если функция получает 'even', то функция возвращает массив чётных чисел
	если функция получает 'odd', то функция возвращает массив нечётных чисел

*/


const getRandomArr3 = (arrLength, n, m, str) => {
	let arr = [];
	str === '';
	arrLength === arr.length;

	const max = Math.max(n, m);
	const min = Math.min(n, m);

	for (let i = 0; i < arrLength; i++) {
		let num = arr[i];
		num = Math.floor(Math.random() * (max - min + 1)) + min;

		if (str === 'even') {
			while (num % 2 !== 0) {
				num = + 1;
				continue;
			}
		} else if (str === 'odd') {
			while (num % 2 === 0) {
				num = + 1;
				continue;
			}
		}
	}

	console.log(arr);

}


getRandomArr3(10, 20, 40, 'even');






/*
if (num % 2 !== 0) {
	num = + 1;
	return str === 'odd';
} else {
	return str === 'even';
};
*/