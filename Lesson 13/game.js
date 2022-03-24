'use strict';

/*
Необходимо реализовать функционал игры "Камень ножницы бумага"
Нужно использовать 2 файла:
game.js, котором будет происходить действия игры
script.js в котором эта игра будет запускаться

Пригодится функция getRandomIntInclusive, чтобы помочь сделать ход компьютеру.
Важно выполнить определенные требования:
1) В функции game() реализуется сам механизм игры.
2) Результат поединка и выбранный язык должны храниться в замыкании и
реализация данной игры должна быть сделана с помощью рекурсии без единого цикла.
Если пользователь нажимает "отмена" переспрашиваем его "точно ли он хочет выйти?"
Если да то выводится результат всех игр (сколько очков у пользователя и у компьютера)
Если пользователь передумал выходить, то игра продолжается дальше, сохраняя прежние очки.
*/

(() => {
	const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

	FIGURES_RUS[0] === FIGURES_RUS;

	const getRandomIntInclusive = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const game = () => {
		const result = {
			player: 0,
			computer: 0,
		};

		const start = () => {

			const str = prompt('камень, ножницы, бумага?');
			const answers = [...FIGURES_RUS];

			let figure_rus = FIGURES_RUS[getRandomIntInclusive(0, 2)];
			console.log(figure_rus);


			if (figure_rus === str || figure_rus[0] === str[0]) {
				alert(`Компьютер: ${figure_rus}
				Вы: ${figure_rus}
				Ничья`)
				console.log(`${figure_rus[0]} ${str[0]}`);
				start();
			};

			if (str[0] === answers[1][0] && figure_rus === 'камень') {
				alert(`Компьютер: ${figure_rus}
				Вы: ${answers[1]}
				Вы проиграли`)
				console.log(`${figure_rus[0]} ${answers[1]}`)

				result.computer += 1;
				start();
			};

			if (str[0] === answers[0][0] && figure_rus === 'ножницы') {
				alert(`Компьютер: ${figure_rus}
				Вы: ${answers[0]}
				Вы выиграли`)
				console.log(`${figure_rus[0]} ${str[0]}`)

				result.player += 1;
				start();
			};

			if (str[0] === answers[2][0] && figure_rus === 'ножницы') {
				alert(`Компьютер: ${figure_rus}
				Вы: ${answers[2]}
				Вы проиграли`)
				console.log(`${figure_rus[0]} ${str[0]}`)

				result.computer += 1;
				start();
			};

			if (str[0] === answers[1][0] && figure_rus === 'бумага') {
				alert(`Компьютер: ${figure_rus}
				Вы: ${answers[1]}
				Вы выиграли`)
				console.log(`${figure_rus[0]} ${str[0]}`)

				result.player += 1;
				start();
			};

			if (str[0] === answers[0][0] && figure_rus === 'бумага') {
				alert(`Компьютер: ${figure_rus}
				Вы: ${answers[0]}
				Вы проиграли`)
				console.log(`${figure_rus[0]} ${str[0]}`)

				result.computer += 1;
				start();
			};

			if (str[0] === answers[2][0] && figure_rus === 'камень') {
				alert(`Компьютер: ${figure_rus}
				Вы: ${answers[2]}
				Вы выиграли`)
				console.log(`${figure_rus[0]} ${str[0]}`)

				result.player += 1;
				start();
			};

			if (str === '' || typeof str === 'null') {
				const confirmation = confirm('еще?');
				if (confirmation === true) {
					start();
				} else {
					alert(`Результат:
				Компьютер ${result.computer}
				Вы ${result.player}`)
				};
			};

			if (str[0] !== answers[0][0] || str[0] !== answers[1][0] || str[0] !== answers[2][0]) {
				start();
			};
		};

		return start();
	};

	window.RPS = game;

})();

