'use strict';

/*
Продолжим работу в cart.js из предыдущего урока 

Методы объекта cart не должны обращаться к объекту по имени.
В объект cart добавьте сеттер setDiscount и свойство discount.
Сеттер setDiscount будет принимать promocode,
если promocode будет строка METHED, то в discount будет добавляться значение 15,
если promocode будет строка NEWYEAR, то в discount будет добавляться значение 21,
метод calculateItemPrice должен учитывать скидку равную процентному значению discount.
*/

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  discount: 0,
  add(newItem, newItemPrice, newItemCount = 1) {
    const currentGood = {
      name: newItem,
      price: newItemPrice,
      count: newItemCount,
    };

    this.items.push(currentGood);

    this.increaseCount();
  },
  increaseCount() {
    let count = 0;
    this.items.forEach((item) => {
      console.log(count += item.count);
    });
    this.count = count;
  },
  calculateItemPrice() {
    let price = 0;
    this.items.forEach((item) => {
      console.log(price += item.count * item.price);
    });
    let priceAfterDiscount = price - price * (this.discount / 100);
    return priceAfterDiscount;
  },
  get totalPriceAmount() {
    return this.calculateItemPrice();
  },
  clear() {
    return;
  },
  print(itemsList) {
    itemsList = JSON.stringify(this.items);
    return `Список покупок - ${itemsList},
Общая стоимость - ${this.totalPriceAmount}`;
  },
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    };
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    };
  },
};

cart.add('barbi', 4500, 2);
cart.add('teddy bear', 2100);
cart.add('car toy', 1500, 8);


cart.setDiscount = 'METHED';
console.log(cart.print());

