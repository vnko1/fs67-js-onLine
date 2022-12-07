// -------- План заняття
// Масиви. Що це, навіщо вони потрібні?
// Доступ до елементів массиву.
// Ітерація по массиву, цикли for & for...of. Оператори break та continue
// Переприсвоєння та типи данних.
// Методи для роботи з массивом.


// const names = ['James' , 'Iryna', 'Andriy', 'Bohdan', 'Daria', 'Alina']
// const fruit = ['Яблуко', 'Груша', 'Ананас']

// console.log('NAMES ->', names)
// console.log(names[1])
// console.log(names.length)
// console.log(fruit)

// for(let i=0; i<=names.length-1; i++){
//     console.log(names[i])
// }

// for(let name of names){
//     if(name === 'Bohdan'){
//         console.log('Я ЗНАЙШОВ БОГДАНА !!!!!')
//         break;
//     }else{
//         console.log('Це не Богдан :с')
//     }
// }

// console.log([1,2,3]===[1,2,3])

// let a = 'Hello World'
// console.log(a)
// a = 'Bye world'
// console.log(a)

// let arrayOne = ['Яблуко','Груша','Слива','Персик','Гранат']
// let arrayTwo = arrayOne
// console.log('arrayOne before changing ->', arrayOne)
// console.log('arrayTwo before changing ->', arrayTwo)
// arrayTwo.push('LOOK HERE')
// console.log('---------- PUSH METHOD INIT--------')
// console.log('arrayOne after changing ->', arrayOne)
// console.log('arrayTwo after changing ->', arrayTwo)

// const fruit = ['Яблуко', 'Груша', 'Ананас']

// SPLIT METHOD
// let string = 'Javascript-is-amazing-!'
// let array = string.split('-')
// console.log(array)

// JOIN METHOD
// let array = ["Javascript", "is", "amazing", "!"]
// console.log(array)
// let string = array.join('-')
// console.log(string)


// indexOf METHOD
// console.log('----INDEXOF METHOD')
// console.log(fruit.indexOf('Ананас'))
// console.log(fruit.indexOf('Слива'))


// includes METHOD
// console.log('----Includes METHOD')
// console.log(fruit.includes('Ананас'))
// console.log(fruit.includes('Слива'))

// PUSH & POP METHODS
// const fruit = ['Яблуко', 'Груша', 'Ананас']
// console.log('FRUITS ->', fruit)
// fruit.push('Слива')
// console.log('FRUITS AFTER PUSH ->', fruit)
// console.log(fruit.pop())
// console.log(fruit.pop())
// console.log(fruit.pop())
// console.log('FRUITS AFTER POP ->', fruit)

// slice METHOD
// const fruit = ['Яблуко', 'Груша', 'Ананас', 'Картопля', 'Огірок', 'Кабачок', 'Полуниця']
// const vegetables = fruit.slice(3,6)
// console.log(vegetables)

// concat METHOD
// const fruit = ['Яблуко', 'Груша', 'Ананас', 'Полуниця']
// const vegetables = ['Картопля', 'Огірок', 'Кабачок']
// const salad = fruit.concat(vegetables)
// console.log(salad)

// splice METHOD
// const scores = [1, 2, 3, 4, 5];
// ВИДАЛЕННЯ !
// const deletedScores = scores.splice(2,2)
// console.log(deletedScores)
// ДОДАВАННЯ !
// scores.splice(2, 0, 'YOU ADD ME HERE', 'AND ME')
// console.log(scores)
// ЗАМІНА !
// scores.splice(2,1, 10)
// console.log(scores)


// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
//
// for(let i=1; i<= fruits.length-1; i++){
//     console.log(i+1)
//     console.log(fruits[i])
//     console.log(`${i+1}: ${fruits[i]}`)
// }
// for(let i=1; i<= fruits.length-1; i+=1){
//     console.log(i+1)
//     console.log(fruits[i])
//     console.log(`${i+1}: ${fruits[i]}`)
// }


// const string = 'javascript is amazing !'
// console.log(string.split('java  '))
