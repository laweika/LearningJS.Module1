'use strict';

/*
Напишите функцию filter()
функция принимает в параметрах 2 массива
Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
Результат функции: массив из всех студентов, которые сдали экзамен.*/

const allStudentsList = ['Петров', 'Иванов', 'Васечкин', 'Харламов', 'Зверьков', 'Попов'];
const failedExamStudentsList = ['Иванов', 'Васечкин'];

const filter = (allStudentsList, failedExamStudentsList) => allStudentsList.splice(failedExamStudentsList.length);

console.log(filter(allStudentsList, failedExamStudentsList));
