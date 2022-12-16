//--------- План уроку
// spread: передача аргументів, створення нового масиву, створення нового об'єкта
// rest: збирання всіх аргументів функції, збирання частини аргументів функції
// Деструктуризація об'єктів
// Значення за замовчуванням
// Зміна імені змінної
// Деструктуризація в циклах
// Глибока деструктуризація
// Деструктуризація масивів
// Патерн «Об'єкт параметрів»

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "На березі спокійних вод",
//         author: "Роберт Шеклі",
//         rating: 8.51,
//     },
// ];

// SPREAD
// const number = [14,15,25,67,89,0,-3]
// const min = Math.min(...number)
// console.log(min)

// const arr = [1,2,3,4,5]
// // const arr2 = arr.slice(0)
// const arr2 = [...arr]
// arr2.push('Look at me')
// console.log(arr2 === arr)
// console.log(arr)
// console.log(arr2)

// let fruits = ['apple', 'orange', 'kiwi']
// let vegetables = ['potato', 'onion', 'cucumber']
// let salad = [...fruits, ...vegetables]
// console.log(salad)

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 100 };
// const thirdObject = {...first, ...second}
// console.log(thirdObject)

// REST

// function numberAction(a,b,c, ...others){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(others)
// }
// numberAction(5, 25, 55,45,67,82)

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "На березі спокійних вод",
//         author: "Роберт Шеклі",
//         rating: 8.51,
//     },
// ];
//
// for(let i = 0; i<=books.length-1;i++){
//     const {title, author,rating} = books[i]
//     console.log(`Автором цієї книги (${title}) є ${author}. Рейтинг - ${rating}`)
// }


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//     coverImage: 'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg'
// };
// const book2 = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
// };
// const { title, author, rating, coverImage = 'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png'} = book;
// const { title: bookName, author, rating, coverImage} = book;
// const message = `Книга ${bookName} автора ${author} з рейтингом ${rating}. Обкладинка: ${coverImage}`;
// console.log(message)


// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {name,tag,stats: {followers,views,likes}} = user // 1 variant of destructuring
// const {name,tag,stats} = user // 2 variant of destructuring
// const {followers, likes, views} = stats
//
// console.log(`Імя юзера - ${name}. Юзер тег - ${tag}. Статистика юзера`)
// console.log(`Followers: ${followers}`)
// console.log(`Views: ${views}`)
// console.log(`Likes: ${likes}`)

// const salad = ['chicken', 'pineapple', 'tomato']
// const [meat, fruit, vegetable] = salad
//
// console.log(meat)

// function createUser({name, surname, mail}){
//     console.log("Ім'я:", name)
//     console.log("Surname:", surname)
//     console.log("Mail:", mail)
// }

// createUser('Andrew', 'Wick', 'sweetboy@gmail.com')
// createUser({name:'John', surname: 'Wick', mail:'sweetboy@gmail.com'})

// Какой из двух тайтлов из объектов возьмется в переменную месседж?
const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};
// const book2 = {
//     title: "блабла",
//     author: "бла",
//     genres: ["prose", "бум"],
//     isPublic: true,
//     rating: 8.45,
// };

// const {title, author, isPublic, rating} = book;
// const {title: bookName, author, isPublic, rating } = book2;
// const accessType = isPublic ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе`;
// const message = `Книга ${bookName} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе`;
// console.log(message)

// let country = {
//     "name": {
//         "common": "Mauritania",
//         "official": "Islamic Republic of Mauritania",
//         "nativeName": {
//             "ara": {
//                 "official": "الجمهورية الإسلامية الموريتانية",
//                 "common": "موريتانيا"
//             }
//         }
//     },
//     "tld": [
//         ".mr"
//     ],
//     "cca2": "MR",
//     "ccn3": "478",
//     "cca3": "MRT",
//     "cioc": "MTN",
//     "independent": true,
//     "status": "officially-assigned",
//     "unMember": true,
//     "currencies": {
//         "MRU": {
//             "name": "Mauritanian ouguiya",
//             "symbol": "UM"
//         }
//     },
//     "idd": {
//         "root": "+2",
//         "suffixes": [
//             "22"
//         ]
//     },
//     "capital": [
//         "Nouakchott"
//     ],
//     "altSpellings": [
//         "MR",
//         "Islamic Republic of Mauritania",
//         "al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah"
//     ],
//     "region": "Africa",
//     "subregion": "Western Africa",
//     "languages": {
//         "ara": "Arabic"
//     },
//     "translations": {
//         "ara": {
//             "official": "الجمهورية الإسلامية الموريتانية",
//             "common": "موريتانيا"
//         },
//         "bre": {
//             "official": "Republik islamek Maouritania",
//             "common": "Maouritania"
//         },
//         "ces": {
//             "official": "Mauritánská islámská republika",
//             "common": "Mauritánie"
//         },
//         "cym": {
//             "official": "Islamic Republic of Mauritania",
//             "common": "Mauritania"
//         },
//         "deu": {
//             "official": "Islamische Republik Mauretanien",
//             "common": "Mauretanien"
//         },
//         "est": {
//             "official": "Mauritaania Islamivabariik",
//             "common": "Mauritaania"
//         },
//         "fin": {
//             "official": "Mauritanian islamilainen tasavalta",
//             "common": "Mauritania"
//         },
//         "fra": {
//             "official": "République islamique de Mauritanie",
//             "common": "Mauritanie"
//         },
//         "hrv": {
//             "official": "Islamska Republika Mauritanija",
//             "common": "Mauritanija"
//         },
//         "hun": {
//             "official": "Mauritániai Iszlám Köztársaság",
//             "common": "Mauritánia"
//         },
//         "ita": {
//             "official": "Repubblica islamica di Mauritania",
//             "common": "Mauritania"
//         },
//         "jpn": {
//             "official": "モーリタニア·イスラム共和国",
//             "common": "モーリタニア"
//         },
//         "kor": {
//             "official": "모리타니 이슬람 공화국",
//             "common": "모리타니"
//         },
//         "nld": {
//             "official": "Islamitische Republiek Mauritanië",
//             "common": "Mauritanië"
//         },
//         "per": {
//             "official": "جمهوری اسلامی موریتانی",
//             "common": "موریتانی"
//         },
//         "pol": {
//             "official": "Islamska Republika Mauretańska",
//             "common": "Mauretania"
//         },
//         "por": {
//             "official": "República Islâmica da Mauritânia",
//             "common": "Mauritânia"
//         },
//         "rus": {
//             "official": "Исламская Республика Мавритания",
//             "common": "Мавритания"
//         },
//         "slk": {
//             "official": "Mauritánska islamská republika",
//             "common": "Mauritánia"
//         },
//         "spa": {
//             "official": "República Islámica de Mauritania",
//             "common": "Mauritania"
//         },
//         "swe": {
//             "official": "Islamiska republiken Mauretanien",
//             "common": "Mauretanien"
//         },
//         "tur": {
//             "official": "Moritanya İslam Cumhuriyeti",
//             "common": "Moritanya"
//         },
//         "urd": {
//             "official": "اسلامی جمہوریہ موریتانیہ",
//             "common": "موریتانیہ"
//         },
//         "zho": {
//             "official": "毛里塔尼亚伊斯兰共和国",
//             "common": "毛里塔尼亚"
//         }
//     },
//     "latlng": [
//         20.0,
//         -12.0
//     ],
//     "landlocked": false,
//     "borders": [
//         "DZA",
//         "MLI",
//         "SEN",
//         "ESH"
//     ],
//     "area": 1030700.0,
//     "demonyms": {
//         "eng": {
//             "f": "Mauritanian",
//             "m": "Mauritanian"
//         },
//         "fra": {
//             "f": "Mauritanienne",
//             "m": "Mauritanien"
//         }
//     },
//     "flag": "\uD83C\uDDF2\uD83C\uDDF7",
//     "maps": {
//         "googleMaps": "https://goo.gl/maps/im2MmQ5jFjzxWBks5",
//         "openStreetMaps": "https://www.openstreetmap.org/relation/192763"
//     },
//     "population": 4649660,
//     "gini": {
//         "2014": 32.6
//     },
//     "fifa": "MTN",
//     "car": {
//         "signs": [
//             "RIM"
//         ],
//         "side": "right"
//     },
//     "timezones": [
//         "UTC"
//     ],
//     "continents": [
//         "Africa"
//     ],
//     "flags": {
//         "png": "https://flagcdn.com/w320/mr.png",
//         "svg": "https://flagcdn.com/mr.svg"
//     },
//     "coatOfArms": {
//         "png": "https://mainfacts.com/media/images/coats_of_arms/mr.png",
//         "svg": "https://mainfacts.com/media/images/coats_of_arms/mr.svg"
//     },
//     "startOfWeek": "monday",
//     "capitalInfo": {
//         "latlng": [
//             18.07,
//             -15.97
//         ]
//     }
// }
// const {name: {nativeName:{ara:{official}}}} = country
// const { name } = country
// const { nativeName } = name
// const { ara } = nativeName
// const { official } = ara
// console.log(`Ви знаходитесь в країні з офіційною назвою - ${official}`)

const bookTest = {
    name: 'TEST NAME',
    author: 'TEST author',
    rating: 'TEST RATING',
}
const {coverImage = 'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png'} = bookTest
console.log(coverImage)
