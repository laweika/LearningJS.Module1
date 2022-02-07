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
	add(newItem, newItemPrice, newItemNum = 1) {
		cart.items = newItem;
		newItem === '';
		newItemPrice = 0;
	},
	increaseCount(newItemNum) {
		return count = + newItemNum;
	},
	calculateItemPrice(newItemPrice) {
		return totalPrice = + newItemPrice;
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

console.log(cart.add('dd', 45, 2));
cart.add();
cart.add();

console.log(cart.print());