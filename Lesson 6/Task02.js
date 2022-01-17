'use strict';

/*
Напишите функцию isPrime.
Она принимает число и возвращает true, если число является простым, а в ином случае false.
Простое число - целое положительное число, имеющее ровно два различных натуральных делителя - единицу и самого себя.
Например, 5 - простое число, так как делится без остатка только на 1 и на себя.
151, 911, 1987 - так же простые числа
Используйте цикл for в функции
*/

/*
const isPrime = (num) => {
	for (let primeNum = num, x = Math.round(Math.random() * 10), result = primeNum / x; result === 1; Boolean(primeNum) === 'true') {

		console.log(x);

		if (x !== primeNum) break;
		if (primeNum % x !== 0) break;
	}
}*/


const isPrime2 = (num) => {
	for (let testNum = 2; testNum < num; testNum++) {

		if (num % testNum === 0) {
			return false;
		}
	}
	return true;
}


console.log(isPrime2(151));