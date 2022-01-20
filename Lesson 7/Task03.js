'use strict';

/*
Напишите функцию addPrefix 
Функция получает массив в виде параметров и возвращает массив с префиксами
После префикса пробел добавляется автоматически
Входящий массив:
const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
Вызов функции:
addPrefix(names, 'Mr')
Результат функции:
['Mr Noah', 'Mr Liam', 'Mr Mason', 'Mr Jacob', 'Mr. Robot', 'Mr William', 'Mr Ethan', 'Mr Michael', 'Mr Alexander'];
*/

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
console.log(names);

const addPrefix = () => {
	names.splice(0, 1, 'Mr Noah');
	const addedPrefix = names.join(', Mr ').split();
	return addedPrefix;
};

console.log(addPrefix(names));