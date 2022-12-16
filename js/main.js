//--------- План уроку
// 1. Що таке функція, навіщо вони потрібні і як з ними працювати.
// 2. function expression VS function declaration
// 3. Аргументи та параметри функції та параметри за замовчуванням.
// 4. return, повернення та відображення значень.
// 5. Порядок виконання коду з функціями.
// 6. Псевдомассив arguments та робота з ним.
// 7. Патерн «Раннє повернення»
// 8. Області видимості - глобальна та блочна.
// 9. Стек викликів.


// DECLARATION
// function showData(){
//     console.log('LOOK AT ME ! DECLARATION')
// }


// EXPRESSION
// showData2()
// const showData2 = function(){
//     console.log('LOOK AT ME ! EXPRESSION')
// }

// let username = 'Bohdan'
// let realArray = ['Bohdan', 'Andriy']
// function getData(name,age){
//     let arrayData = Array.from(arguments)
//     console.log(arrayData)
// }
// getData('Bohdan', 24, true, 25,35,45,55)

// function getSum(a,b){
//     return a*b
// }
//
// console.log(getSum(5,5))

// function showNumber(number){
//     console.log('------>', number)
// }
//
// console.log('FIRST CONSOLE.LOG')
// showNumber(25)
// console.log('SECOND CONSOLE.LOG')

// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log("Для проведения операции введите сумму больше нуля");
//         return;
//     } else if (amount > balance) {
//         console.log("Недостаточно средств на счету");
//         return;
//     } else {
//         console.log("Операция снятия средств проведена успешно");
//         return;
//     }
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена успешно"

// ОБЛАСТЬ ВИДИМОСТІ

// let name = 'Bohdan'
// let age = 24
//
// function Visibility(){
//     let carOwner = 'BMW'
//     console.log(name)
// }

// СТЕК ВИКЛИКІВ

// function fnA(){
//     console.log('Лог всередині fnA, до виклику fnB')
//     fnB()
//     console.log('Лог всередині fnA, після виклику fnB')
// }
// function fnB(){
//     console.log('Лог всередині fnB')
// }
//
// console.log('Лог до виклику fnA')
// fnA()
// console.log('Лог після виклику fnB')




    // ? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
    // ? Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
    // ? Вага та висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
    // ? тобто як роздільник дробової частини може бути кома.
    // ? Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calcBMI(weight, height){
//     weight = Number.parseFloat(weight.replace(',', '.'))
//     height = Number.parseFloat(height.replace(',', '.'))
//     const result = weight / height ** 2 // 28.63464576
//     return result.toFixed(1) // 28.6
// }
// console.log(calcBMI('88,3', '1.75'))


// function min( a,b){
//     if(a < b){
//         return a
//     }else if(b < a){
//         return b
//     }
// }
// console.log(min(12,10))

// function min(a,b){
//     return a<b ? a : b
// }
// console.log(min(10,25))
