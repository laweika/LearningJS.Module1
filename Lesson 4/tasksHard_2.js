'use strict';

{
	const monthIncome = prompt('Введите Ваш доход за месяц для подсчета налога.');
	let tax;

	if (monthIncome <= 15000) {
		tax = monthIncome * 0.13;
		alert(`Ваш налог составляет ${Math.round(tax)}₽`);
	} else if (monthIncome > 15000 <= 50000) {
		tax = (monthIncome - 15000) * 0.2;
		alert(`Ваш налог составляет ${Math.round(tax)}₽`);
	} else if (monthIncome >= 50000) {
		tax = (monthIncome - 50000) * 0.3;
		alert(`Ваш налог составляет ${Math.round(tax)}₽`);
	}
}