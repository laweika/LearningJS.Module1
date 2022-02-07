'use strict';

/*
	Продолжаем работать с предыдущей функцией
	Функция принимает еще два параметра n и m, числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива, m и n включительно.
	Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
*/


const getRandomArr2 = (arrLength, n, m) => {
	let arr = [];

	const max = Math.max(n, m);
	const min = Math.min(n, m);

	for (let i = 0; i < arrLength; i++) {
		arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
	}

	console.log(arr);
}

getRandomArr2(10, 20, 40);