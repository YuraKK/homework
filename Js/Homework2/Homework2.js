//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = Math.random() * 59;
console.log(time);

if (time<=15) {

console.log('persza czwert');

}   else if (time>15 && time<=30) {
    console.log('druga czwert');

}else if (time>30 && time<=45) {
    console.log('tretia czwert');

}else if (time>45 && time<=59){
    console.log('czetwerta czwert');
}

// У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let days = Math.random() * 31;
console.log(days);

if (days<=10) {
    console.log('Частина перша');

}else if (days>10 && days<=20) {
    console.log('друга частина');

}else if (days>20 && days<=31) {
    console.log('третя чатина');
}

//- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)


let test = prompt('enter key');
switch (test){
    case 'true':
        alert('Вірно');
        break;
    default :
        alert('Невірно');
}
//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let a = prompt('enter number');
if (a !=0)
{
    console.log('Красавчік')
}
else{
    console.log('Невірно')
}
//- Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let day = prompt('enter your day');

switch (day){

    case '1':
        alert('Сходити в кіно');
        break;
    case '2':
        alert('Любюватися собою');
        break;
    case '3':
        document.write('Приїхати до батьків');
        break;
    case '4':
        document.write('Поприбирати у себе в дома');
        break;
        case '5':
        document.write('чіл');
        break
    case'6':
        alert('Впасти в депресію');
        break
        case '7':
            alert('Приготуватися до наступного тиждня');

}

//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = Math.random() * 2022
Math.floor(year);
if (year %4 ===0)
{
    document.write('Високосний');

}
else{
    document.write('ne wysokosnyj');
}
// Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте?


let javas = prompt('ка «офіційна» назва JavaScript?');
if (javas ==='ECMAScript'){
    alert('Правильно!');
}else{
    alert('Не знаєте? Лол');
}