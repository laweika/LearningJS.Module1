'use strict';

/*
	Продолжаем работать с предыдущей функцией
	Функция принимает еще два параметра n и m, числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива, m и n включительно.
	Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
*/


const getRandomNum2 = (m, n) => {
	const max = Math.max(n, m);
	const min = Math.min(n, m);

	Math.floor((Math.random() * max) + 1) - min;
}

const randomNum2 = getRandomNum2(20, 50)
console.log(randomNum2);

const getRandomArr2 = (arrLength) => {
	let arr = [];
	arr.length = arrLength;

	for (let i = 0; i < arrLength; i++) {
		arr[i] = randomNum2;
	}

	console.log(arr);
}

console.log(getRandomArr2(10));