// Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class Bloger {
//   constructor({ name, age, numberOfPosts, topics } = {}) {
//     this.name = name;
//     this.age = !Number(age) ? 0 : Number(age);
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }
//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const Bloger = function ({ name, age, numberOfPosts, topics } = {}) {
//   this.name = name;
//   this.age = !Number(age) ? 0 : Number(age);
//   this.numberOfPosts = numberOfPosts;
//   this.topics = topics;
// };

// Bloger.prototype.getInfo = function () {
//   return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
// };

// Bloger.prototype.updatePostCount = function (value) {
//   this.numberOfPosts += value;
// };

// const mango = new Bloger({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Bloger({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo());

// Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//   static findItem(item, items) {
//     return items.findIndex(el => el === item);
//   }
//   constructor(item) {
//     this.items = item;
//   }
//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     if (Storage.findItem(item, this.items) === -1) {
//       return 'нету';
//     }
//     this.items.splice(Storage.findItem(item, this.items), 1);
//   }
// }

// const Storage = function (item) {
//   this.items = item;
// };

// Storage.findItem = function (item, items) {
//   return items.findIndex(el => el === item);
// };

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (item) {
//   this.items.push(item);
// };

// Storage.prototype.removeItem = function (item) {
//   if (Storage.findItem(item, this.items) === -1) {
//     return 'нету';
//   }
//   this.items.splice(Storage.findItem(item, this.items), 1);
// };

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.log(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]
// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

const User = function ({ login, email }) {
  this._login = login;
  this._email = email;
};

User.prototype.getLogin = function () {
  return this._login;
};

User.prototype.setLogin = function (newLogin) {
  this._login = newLogin;
};

User.prototype.getEmail = function () {
  return this._email;
};

User.prototype.setEmail = function (newEmail) {
  this._email = newEmail;
};

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.getLogin()); // Mango
mango.setLogin('Mangodoge');
// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };
//   static findByIndex(text, item) {
//     return item.findIndex(el => el.text === text);
//   }

//   constructor(item) {
//     this.items = item;
//   }
//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     this.items.splice(Notes.findByIndex(text, this.items), 1);
//   }

//   updatePriority(text, newPriority) {
//     this.items[Notes.findByIndex(text, this.items)].priority = newPriority;
//   }
// }

// const Notes = function (item) {
//   this.items = item;
// };

// Notes.Priority = { LOW: 'low', NORMAL: 'normal', HIGH: 'high' };
// Notes.findByIndex = function (text, item) {
//   return item.findIndex(el => el.text === text);
// };

// Notes.prototype.addNote = function (note) {
//   this.items.push(note);
// };

// Notes.prototype.removeNote = function (text) {
//   this.items.splice(Notes.findByIndex(text, this.items), 1);
// };

// Notes.prototype.updatePriority = function (text, newPriority) {
//   this.items[Notes.findByIndex(text, this.items)].priority = newPriority;
// };

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes);

// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// myNotes.updatePriority('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);

// Example 5 - Toggle
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// class Toggle {
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }
// }
// const Toggle = function ({ isOpen = false } = {}) {
//   this.on = isOpen;
// };
// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
