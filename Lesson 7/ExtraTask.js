'use strict';

/*
Напишите функцию getAveragePriceGoods для получения средней цены товара. Дан многомерный  массив:
const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];
В каждом массиве из двух элементов, первым является количество товаров в чеке, а вторым — общая сумма.
Необходимо посчитать среднюю стоимость одного товара в магазине.*/

const allСashbox2 = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];

const getAveragePriceGoods = (allСashbox2) => {

  const cloneAllCashbox2 = [...allСashbox2];


  let totalGoodsPriceSum = 0;

  for (let i = 0; i < cloneAllCashbox2.length; i++) {
    const [[, sum]] = cloneAllCashbox2;

    totalGoodsPriceSum += sum[i][1];
  }
  console.log(totalGoodsPriceSum);


  let totalGoodsAmount = 0;

  for (let i = 0; i < cloneAllCashbox2.length; i++) {
    const [[goodsAmount,]] = cloneAllCashbox2;

    totalGoodsAmount += (goodsAmount[i][0]);
  }
  console.log(totalGoodsAmount);

  return totalGoodsPriceSum / totalGoodsAmount;
};

console.log(getAveragePriceGoods(allСashbox2));
