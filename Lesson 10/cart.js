'use strict';

/*
Продолжим работу с cart.js

Обнаружена уязвимость в нашем функционале. Если после добавления последнего товара присвоить к totalPrice любое значение, например:
cart.totalPrice = 10;
то при выводе print() общая стоимость корзины будет равна 10.
Чтобы это предотвратить, необходимо свойство totalPrice сделать геттером который будет возвращать результат вызова метода calculateItemPrice, 
метод getTotalPrice больше не нужен.
calculateItemPrice переделать таким образом, чтобы сумму он возвращал, а не записывал в свойство totalPrice
Вызов метода calculateItemPrice оставить только у геттера totalPrice
*/

const cart = {
	items: [],
	totalPrice: 0,
	count: 0,
	add(newItem, newItemPrice, newItemCount = 1) {
		let currentGood = {
			name: newItem,
			price: newItemPrice,
			count: newItemCount,
		};

		this.items.push(currentGood);

		this.increaseCount();
	},
	increaseCount() {
		let count = 0;
		this.items.forEach((item) => {
			console.log(count += item.count);
		});
		this.count = count;
	},
	calculateItemPrice() {
		let price = 0;
		this.items.forEach((item) => {
			console.log(price += item.count * item.price);
		});
		return price;
	},
	get totalPrice() {
		return this.calculateItemPrice();
	},
	clear() {
		return;
	},
	print(itemsList) {
		itemsList = JSON.stringify(this.items);
		return `Список покупок - ${itemsList},
		Общая стоимость - ${this.totalPrice}`;
	},
};

cart.add('barbi', 4500, 2);
cart.add('teddy bear', 2100);
cart.add('car toy', 1500, 8);

console.log(cart.print());
