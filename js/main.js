//--------- План уроку
// 1. Розгалуження по умовах.
// 2. Конструкції if, if....else, else...if
// 3. Тернарний оператор
// 4. Конструкція switch
// 5. Області видимості https://goit.global/textbooks/javascript-yk5evp/v2/uk/img/lesson-02/scopes.png
// 6. Цикли for, while, do...while (for of array), (for in objects)
// 7. break & continue

// console.log('123')
console.clear()

// const number = 45
// if(number >= 18 && number < 55){
//     console.log('Користувач повнолітній')
// }else if(number >= 55){
//     console.log('Користувач пенсіонер')
// }else{
//     console.log('Користувач не повнолітній')
// }

// if(true){
//     console.log(123)
// }else{
//
// }

// number === 16 && number <= 50 ? console.log('Користувачу 16 років') : console.log('Користувачу не 16 років')

// const subscribe = 'silver'
// switch(subscribe){
//     case 'premium':
//         console.log('Наш корисутвач має підписку преміум')
//         break;
//     case 'silver':
//         console.log('Наш користувач має підписку сільвер')
//         break;
//     default:
//         console.log('Наш користувач має іншу підписку')
// }



// for( let i = 1; i > number; i++){
//     console.log('Наше число ->',number)
//     console.log('Номер ітерації ->',i)
// }

// do{
//     number++
// }while(number <= 10){
//     console.log(number)
// }

// const number = 10
// for(let i =0; i<= number; i+=1){
//     if(i === 3){
//         continue;
//         console.log('Я цифра 3 ( третя ітерація )')
//     }
//     console.log(i)
// }


// TASK 1

// const name = 'Bohdan'
// if(name.includes('к')){
//     console.log('В імені є така буква')
// }else{
//     console.log('В імені немає такої букви')
// }

// name.includes('к') ? console.log('В імені є така буква') : console.log('В імені немає такої букви')

// ? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
//     ? [0 до 15) - перша чверть години
//     ? [15 до 30) - друга чверть години
//     ? [30 до 45) - третя чверть години
//     ? [45 до 60) - четверта чверть години

// if(number >= 0 && number < 15){
//     console.log('Перша чверть години')
// }else if(number >= 15 && number < 30){
//     console.log('Друга чверть години')
// }else if(number >= 30 && number < 45){
//     console.log('Третя чверть години')
// }else{
//     console.log('Четверта чверть години')
// }


// let number = 25
// switch (number){
//     case number >= 0 && number < 15:
//         console.log('Перша чверть години')
//         break;
//
//     case number >= 15 && number < 30:
//         console.log('Друга чверть години')
//         break;
//
//         case number >= 30 && number < 45:
//         console.log('Третя чверть години')
//         break;
//
//     default:
//         console.log('Четверта чверть години')
// }


    // ? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з двома винятками.
    // ? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
    //     ? а для чисел, що діляться на 5 – Buzz.
    // ? Для чисел, які кратні 3 і 5 = 'FizzBuzz'

for(let i = 1; i<=100; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log('FizzBuzz')
    }else if(i%5 === 0){
        console.log('Buzz')
    }else if(i%3 === 0){
        console.log('Fizz')
    }else{
        console.log(i)
    }
}
