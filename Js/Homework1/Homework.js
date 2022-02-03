    //Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    //Вивести кожну змінну за допомогою: console.log , alert, document.write

let word = ('Hello');
let second = ('owu');
let third = ('com');
let four = ('ua');
console.log(word);
console.log(second);
document.write(third + "<br/>");
console.log(four);

let masiv = [1, 10, -999, 123, 3.14, 2.7, 16];
let one = 1;
let ten = 10;
let nine = -999;
let onetwo = 123;
let Pi = 3.14;
let twopoint = 2.7;
let six = 16;

console.log(one,ten,nine,onetwo,Pi,twopoint,six);
    //Переприсвоїти кожній змінній з завдання значення на довільне.
      //  Вивести кожну змінну за допомогою: console.log , alert, document.write

let someM = ('newworld');
console.log(someM);

one = 11;
ten = 100;
nine= 9;
onetwo = 12;
Pi = 41.3;
twopoint = 2.1;
six = 6;
console.log(one,ten,nine,onetwo,Pi,twopoint,six);
    //Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
    //За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
    //Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let name = 'Yura';
let fathername = 'Genrihovich';
let ages = 21;

let names = prompt('Say your name', name);

let fatherNames = prompt('Say your fathers name',fathername);

let age = prompt('How old are you', ages);

alert(`Hello ${names} ${fatherNames} you are ${age}`);
    //За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    //let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a,b,c);
    //Визначити відповідний оператор в виразах що б вийшов відповідний результат.
    //В однакових виразах не використовувати однакові оператори!!!
console.log(5 > 6);
console.log(5 == 6);
console.log(5 > 6);
console.log(5 >= 6);

console.log(10 == 10);
console.log(10 >= 10);
console.log(10 != 10);
console.log(10 > 10);

console.log(10 < 10);
console.log(123 != '123');
console.log(123 == '123');

    //Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

    let str = "20";
    let g = 5;

    document.write(str + g + "<br/>");      //  окремо до 20 додає 5 окремо
    document.write(str - g + "<br/>");      //від 20 віднімає 5 бо це java
    document.write(str * '2' + "<br/>");    //просте ділення, без різниці в лапках чи без
    document.write(str / 2 + "<br/>");      //просто множення