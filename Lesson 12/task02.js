/*
Напишите рекурсивную функцию, которая принимает один параметр массив,
генерирует целое число от 0 до 10 включительно и добавляет его в массив.
Каждый раз после добавления нового числа проверяет сумму элементов массива,
если она меньше 50 запускается снова, передавая себе массив. 
Если сумма больше 50-ти, то функция возвращает этот массив.
*/

const randomNum = () => Math.round(Math.random() * 10);

const arr = [];

const randomArr = () => {

	arr.push(randomNum());
	console.log(arr);

	let sum = 0;

	arr.forEach((item) => {
		sum += item;
		console.log(sum);
		return sum;
	});

	if (sum > 50) {
		return arr;
	} else {
		randomArr();
	}
};

randomArr();

