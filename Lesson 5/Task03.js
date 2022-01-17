'use strict';

/*
Напишите функцию, которая принимает строку и возвращает обратную строку
Пример: "Привет мир" => "рим тевирП"
*/

const reverse = (givenString) => {
	let changedString = givenString.split('').reverse('').join('');
	return changedString;
};

reverse('');