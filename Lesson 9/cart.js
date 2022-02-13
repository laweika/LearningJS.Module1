'use strict';

/*
Создайте файл cart.js, подключите к html-файлу, cоздайте объект cart — корзина, oбъект будет содержать следующие свойства:

items = пустой массив - это товары
totalPrice = 0 - общая стоимость корзины
count = 0 - количество товаров

и методы:
getTotalPrice - получить общую стоимость товаров
add - добавить товар
increaseCount - увеличить количество товаров
calculateItemPrice - посчитать общую стоимость товаров
clear - очистить корзину
print - распечатать корзину

Далее описание каждого метода:
getTotalPrice() - метод возвращает значение свойства totalPrice;
calculateItemPrice() - пересчитывает стоимость всей корзины и записывает значение в totalPrice;
increaseCount() - принимает один параметр(число), увеличивает свойство count на это число;
add() - принимает три параметра: название товара, цену товара, количество товара (опциональный параметр, по умолчанию 1 товар), 
этот метод формирует объект из полученных параметров и добавляет его в свойство items,
так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные.
clear() - oчищает полностью нашу корзину, возвращает все значения в изначальные;
print() - выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины;

Для проверки работы функционала добавить 3 или более товаров в корзину, после вызвать метод print для вывода информации в консоль

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
		console.log(currentGood);

		this.increaseCount();
		this.calculateItemPrice();
		this.getTotalPrice();
	},
	increaseCount() {
		this.items.forEach((item) => {
			this.count += item.count;
		});
	},
	calculateItemPrice() {
		this.items.forEach((item) => {
			this.totalPrice += item.price;
		});
	},
	getTotalPrice() {
		return this.totalPrice;
	},
	clear() {
		return;
	},
	print(itemsList) {
		itemsList = JSON.stringify(this.items);
		return this.totalPrice;
	},
};

cart.add('barbi', 4500, 2);
cart.add('teddy bear', 2100);
cart.add('car toy', 1500, 8);

console.log(cart.getTotalPrice())
console.log(cart.print());
