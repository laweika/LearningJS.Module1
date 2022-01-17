'use strict';

/*
Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
В качестве аргументов функция принимает 3 параметра: общая сумма корзины, количество товаров в корзине и промокод.
Правила и порядок (порядок важен!) начисления скидок:
Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
Если промокод равен "METHED", то скидка 10%
Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р
Порядок применения скидок должен соблюдаться
*/

const calcProductNumberDisc = (totalProductNum, totalPrice) => {
	if (totalProductNum > 10) {
		return totalPrice * 0.97;
	}
	return totalPrice;
}

const calcDiscOver = (totalPrice) => {
	if (totalPrice > 30000) {
		return (totalPrice - 30000) * 0.85 + 30000;
	}
	return totalPrice;
}

const checkPromocode = (promocode, totalPrice) => {
	if (promocode === 'METHED') {
		return totalPrice * 0.9;
	} else if (promocode === 'G3H2Z1' && totalPrice > 2000) {
		return totalPrice - 500;
	}
	return totalPrice;
}

const calculate = (totalPrice, totalProductNum, promocode) => {

	totalPrice = calcProductNumberDisc(totalProductNum, totalPrice);

	totalPrice = calcDiscOver(totalPrice);

	totalPrice = checkPromocode(promocode, totalPrice);

	return `Итоговая сумма составила - ${totalPrice}.`;
}

console.log(calculate());


