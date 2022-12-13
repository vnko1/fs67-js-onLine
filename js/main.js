//--------- План уроку
// 1. Створення об'єкту
// 2. Типи данних які може містити об'єкт, та вкладеність.
// 3. Додавання та зміна властивостей
// 4. Короткі властивості
// 5. Обчислювальні властивості
// 6. Методи об'єкта
// 7. Доступ до властивостей об'єкта в методах
// 8. Цикл for...in
// 9. Метод hasOwnProperty()
// 10. Метод Object.keys()
// 11. Метод Object.values()
// 12. Метод Object.entries()


// const user = {
//     name: 'Andrew',
//     age: 25,
//     carOwner: false,
//     children: null,
//     gender: undefined,
//     pets: ['cat' , 'dog'],
// 'Favorite Color': 'red'
// }
// console.log(user.name)
// console.log(user['name'])
// console.log(user["Favorite Color"])

// console.log(user)
// user.country = 'Ukraine'
// console.log(user.country)

// const type = 'dog'
// const name = 'Pickachu'
// const dog = {
//     name,
//     type
// }
// console.log(dog)

// const propName = 'тест'
// const user = {
//     age: 24,
//     [propName]: 'Богдан'
// }
// console.log(user)

// const filmDuna = {
//     title: 'Duna',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?',
//     rating: 10,
//     actors: [
//         'Rosetta Pena',
//         'Clayton Crawford',
//         'Larry Norton',
//         'Georgia Garrett',
//         'Jackson Ballard',
//     ],
//     adult: false,
//     changeTitle(newTitle) {
//         filmDuna.title = newTitle;
//     },
//
//     addActor(newActor) {
//         filmDuna.actors.push(newActor);
//     },
//
//     updateRating(newRating) {
//         filmDuna.rating = newRating;
//     },
//
//     isAdult() {
//         return filmDuna.adult;
//     },
// };
// console.log('FILM ->',filmDuna)
// console.log(filmDuna.isAdult())
// filmDuna.updateRating(2)
// console.log(filmDuna)
// filmDuna.addActor('John Travolta')
// filmDuna.changeTitle('TEST')
// console.log(filmDuna)

// const user = {
//     age: 24,
//     name: 'Bohdan',
//     carOwner: true,
//     children: null
// }
//
// for(const key in user){
//     console.log(key)
//     console.log(user[key])
// }

// const animal = {
//     legs: 4
// }
//
// const dog = Object.create(animal)
// dog.name = 'Patron'
//
// console.log(dog)
// console.log(dog.legs)
// console.log(dog.hasOwnProperty('name'))
// console.log(dog.hasOwnProperty('legs'))


// const user = {
//     age: 24,
//     name: 'Bohdan',
//     carOwner: true,
//     children: null
// }

// Object.keys()
// console.log(Object.keys(user))
// Object.values()
// console.log(Object.values(user))
// Object.entries()
// console.log(Object.entries(user))


// ? Напиши скрипт, який для об'єкта user послідовно:
// ? додає поле mood зі значенням 'happy'
// ? замінює значення hobby на 'skydiving'
// ? замінює значення premium на false
// ? виводить вміст об'єкта user у форматі ключ: значення
// використовуючи Object.keys() і for...of
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
//
// user.mood = 'happy'
// user.hobby = 'skydiving'
// user.premium = false
// console.log(user)
// const userKeys = Object.keys(user)
// console.log(userKeys)
// for (const key of userKeys){
//     // console.log(key)
//     // console.log('Key: Value')
//     console.log(`${key}: ${user[key]}`
//     )
// }

// TASK 2
//     ? У нас є об'єкт, де зберігаються зарплати нашої команди.
//     ? Напишіть код для підсумовування всіх зарплат та збережіть
//     результат у змінній sum.
//     ? Повинно вийти 390. Якщо об'єкт salaries порожній,
//     результат має бути 0.
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

// Object.values
// const salariesValues = Object.values(salaries)
// console.log(salariesValues)
// let sum = 0
// for(const value of salariesValues){
//     sum += value
// }
// console.log(sum)

// for-in
// let sum = 0
// for( const key in salaries){
//     sum += salaries[key] // salaries['John']
// }
// console.log(sum)

// Object.keys + for...of

// const salariesKeys = Object.keys(salaries)
// // console.log(salariesKeys)
// let sum = 0
// for(const key of salariesKeys){
//     // sum += salaries[key]
//     sum = sum + salaries[key]
// }
// console.log(sum)
//
// TASK 3
//     ? Напиши скрипт управління особистим кабінетом інтернет-банку.
//     ? Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
//     ? Типів транзацький лише два:
//     ? Можна покласти чи зняти гроші з рахунку.
//     ? Кожна транзакція це об'єкт із властивостями: id, type та amount

const Transaction = {
DEPOSIT: 'deposit',
WITHDRAW: 'withdraw',
};

const account = {
    startId: 0,
    balance: 0,
    transactions: [],
    createTransaction(amount, type){
        return {
            amount,
            type,
            id: account.generateID()
        }
    },
    generateID(){
        return account.startId += 1
    },
    deposit(amount){
        account.transactions.push(account.createTransaction(amount, Transaction.DEPOSIT))
        account.balance += amount
    },
    withdraw(amount){
        if(account.balance >= amount){
            account.transactions.push(account.createTransaction(amount, Transaction.WITHDRAW))
            account.balance -= amount
        }else{
            console.log('Не можливо зняти таку сумму, ваш баланс ', account.balance)
        }
    },
    getTransactions(){
        console.log(account.transactions)
    }
}
