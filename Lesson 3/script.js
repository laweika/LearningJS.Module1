'use strict'

{
	const productName = "Shampoo";
	const productCategory = "Hair products";
	const productNumber = 100;
	const productPrice = 1999;

	console.log(productName);
}


{
	const productName = "Mazda 3";
	const productCategory = "Cars";
	const productNumber = 1500000;
	const productPrice = 10;
}

{
	const productName = prompt('Наименование товара');
	const productCategory = prompt('Категория товара');
	const productNumber = prompt('Количество товара');
	const productPrice = prompt('Цена товара');

	console.log(typeof productName);
	console.log(typeof productCategory);
	console.log(typeof Number(productNumber));
	console.log(typeof Number(productPrice));

	console.log(`На складе товар ` + productNumber + ` стоимостью ` + productPrice + `₽ имеется в размере ` + productNumber + ` шт.`);
}