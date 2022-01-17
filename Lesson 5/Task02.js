'use strict';

/*
Напишите функцию, которая принимает строку и возвращает модифицированную строку
Строка начинается с большой буквы, остальные буквы маленькие
Пример:  "привет Мир" => "Привет мир"
*/

const changeSentence = (givenSentence) => {
	let changedSentence = givenSentence.substring(0, 1).toUpperCase() + givenSentence.substring(1).toLowerCase();
	return `Было - ${givenSentence}, стало - ${changedSentence}.`;
};

changeSentence('');
