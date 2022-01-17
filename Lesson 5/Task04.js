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

const canculate = (a, b, c) => {
	let totalPrice = a;
	let totalProductNum = b;
	let promocode = c;


	const countProductNumber = () => {
		if (totalProductNum > 10) {
			return totalPrice * 0.97;
		}
	}

	countProductNumber();

	const countTotalPrice = () => {
		if (totalPrice > 30000) {
			return (totalPrice - 30000) * 0.85;
		}
	}
	countTotalPrice();

	const checkPromocode = () => {
		if (promocode === 'METHED') {
			return totalPrice * 0.9;
		} else if (promocode === 'G3H2Z1') {
			return totalPrice - 500;
		}

	}
	checkPromocode();

	return `Итоговая сумма составила - ${totalPrice}.`;
}

console.log(canculate(12000, 13, 'METHED'));