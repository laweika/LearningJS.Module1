'use strict';

/*
Создать объект rectangle, который описывает ширину и высоту прямоугольника.
Объект должен иметь 2 сеттера для записи ширины и высоты и два геттера 
для получения периметра и площади прямоугольника
Сеттеры могут принимать только числа.
Геттеры возвращают строку число + "см",
пример "40см".

По умолчанию значения высоты и ширины заданы 5 см
 */

const rectangle = {
	get rectanglePerimeter() {
		let result = (this.width + this.height) * 2;
		return `${result}см`;
	},
	get rectangleSquare() {
		let result = this.width * this.height;
		return `${result}см`;
	},
	set widthValue(val) {
		this.width = val;
	},
	set heightValue(val) {
		this.height = val;
	},
};

rectangle.widthValue = 5;
rectangle.heightValue = 5;

console.log(rectangle);
