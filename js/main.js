const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map(car => ({ ...car, price: car.price * (1 - discount) }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// const sortByAscendingAmount = cars =>
//   [...cars].sort((a, b) => a.amount - b.amount);

// console.table(cars);
// console.table(sortByAscendingAmount(cars));

// ------------------------

// Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = cars =>
//   cars.reduce((total, car) => total + car.amount, 0);

// console.log(getTotalAmount(cars));

// ------------------------

// Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = cars =>
//   cars.filter(car => car.onSale).map(car => car.model);

// console.table(getModelsOnSale(cars));

// ------------------------

// Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = cars =>
//   cars.filter(car => car.onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));

// // cars
// console.table('🚀 ~ file: main.js:109 ~ cars', cars);
