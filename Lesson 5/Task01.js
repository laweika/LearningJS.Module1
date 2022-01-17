'use strict';

/*
Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
1 евро = 1.2 доллара,
1 доллар = 73 рубля.
*/

const changeCurrency = (euro = 1, dollar = 1.2, ruble = 73) => {
	let resultChange = euro * dollar * ruble;
	return `${euro} евро в рублях - ${resultChange}.`;
}

changeCurrency();