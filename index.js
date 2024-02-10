console.log('халлоу мазафаки+++');
// объявление переменной
let name;
//инициализация переменной
name = 'Sergey';
console.log(name)
// можно объявить и инициировать // определяем переменную и присваиваем ей значение
const surname = 'Mudakov'

// Типы данных
console.log(typeof 18)

//Операторы - это штуки которые совершают операции
// Арифметические + - * / 
console.log(4+5)
// Сравнение >= <= === !==
console.log (3 !== 4, 5 === 6)
// Логические
console.log( 5 === 3 && 6< 8 || 6 === 6)
// Проверить не пустой ли заголовок
const title = ''
const isTitleIsEmpty = !title
console.log(isTitleIsEmpty)

// Функции
console.log('Функции')
let countOfLaps = 20
//const plan = 10

function run() {
    countOfLaps = countOfLaps + 1
}

while(countOfLaps < 10) {
run()
    console.log(countOfLaps)
}

do {
    run()
    console.log(countOfLaps)
} while (countOfLaps < 10)

countOfLaps = 0
console.log('for')
for (let i = 1; i <= 10; i ++){
    console.log(i)
}

let a = " \t \n" - 2
console.log(`a = ${a}`)

//let x = +prompt("Первое число?", 1);
//let y = +prompt("Второе число?", 2);
//alert(x + y); // 12

let name5 = 'sam'
console.log(name5)
