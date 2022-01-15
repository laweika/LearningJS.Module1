'use strict';


// Задача №2

{
	const rain = Math.round(Math.random());
	console.log(rain);

	if (rain === 1) {
		alert('Пошёл дождь. Возьмите зонт!');
	} else {
		alert('Дождя нет!');
	}
}


// Задача №3

{
	const mathsExamResult = prompt('Введите кол-во баллов по математике: ');
	const rusExamResult = prompt('Введите кол-во баллов по математике: ');
	const itExamResult = prompt('Введите кол-во баллов по математике: ');

	const totalExamResult = +mathsExamResult + +rusExamResult + +itExamResult;

	if (totalExamResult >= 265) {
		alert('Поздравляю, вы поступили на бюджет!');
	} else {
		alert('К сожалению, вы не поступили на бюджет!');
	}
}

// Задача №4

{
	const moneyAmount = prompt('Какую сумму хотите снять?');

	if (moneyAmount % 100 === 0) {
		alert('Минимальные купюры для снятия - 100₽');
	} else {
		alert(`Сумма ${moneyAmount} возможна для снятия`);
	}
}
