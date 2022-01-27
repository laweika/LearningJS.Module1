'use strict';

/*
	Продолжаем работать с предыдущей функцией
	Функция принимает еще два параметра n и m, числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива, m и n включительно.
	Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
*/


const getRandomNum2 = () => Math.floor(Math.random() * 100) + 1;


const getRandomArr2 = (arrLength, n, m) => {

	let arr = [];
	arr.length = arrLength;

	if (getRandomNum2() > n && getRandomNum2() < m || getRandomNum2() < n && getRandomNum2() > m) {
		for (let i = 0; i < arr.length; i++) {
			arr[i] = getRandomNum2();
		}
	}


	console.log(arr);
}

getRandomArr2(10, 20, 40);





/*

		while (randomNum2 > n && randomNum2 < m) {
			if (randomNum2 !== 'empty') {
				break;
			} else {
				randomNum2 = getRandomNum2();
				continue;
			}
		}
	}
	*/

/*
	while (n > m) {
		if (n > getRandomArr2() && getRandomArr2 > m) {
			arr[i] === 'empty';
			continue;
		}
	}
	
	while (m > n) {
		if (getRandomArr2() > n && getRandomArr2 < m) {
			arr[i] === 'empty';
			continue;
		}
	}
*/