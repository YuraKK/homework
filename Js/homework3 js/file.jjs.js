//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr = [1, 2, 3, 4, 5];
// document.write(arr);
//
// let ar = ['yura', 'kokos', 'oleg', 'striczka', 'brat' ];
//
// document.write(ar);
//
// let wordf = [ ' tolik', ' ne tolik', 3, 2, 5, true, true, false];
// document.write(wordf);




// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


//
//
// let pustyj = [];
//
// let string = 1;
// let blblbl = true;
// let qw = 'yura';
// let as = 234;
// let cv = 'cv';
// let aasd = 'bratok';
//
// pustyj[0] = string;
// pustyj[1] = blblbl;
// pustyj[2] = qw;
// pustyj[3] = as;
// pustyj[4] = cv;
// pustyj[5] = aasd;
//
// document.write(pustyj);





// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

//
// let txt = ['qwewq jjiji imi  h fctfyguin tfy rfufvyu'];
//
// document.write(`<div class="txt-box">`)
//
// for  (let i=0; i<10; i++) {
//     document.write(`<div>${txt}</div>`)
// }
//
// document.write(`</div>`)


// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


// let txt2 = ['Bart the best'];
//
// document.write('<ul>')
//
// for  (let i=0; i<10; i++) {
//     document.write(i);
//     document.write(`<li>${txt2}</li>`);
// }
//
// document.write('</ul>')



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
//
// while (i<20)
// {
//     document.write('<h1>Lorem ipsum dolor sit amet.</h1>');
//     i++;
//
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let o = 0;
//
// while (o<20)
// {
//     document.write(o);
//     document.write('<h1>Lorem ipsum dolor sit amet.</h1>');
//     o++;
//
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let maasives = [11, 22, 33, 44, 55, 66, 7, 88, 9, 122];
// document.write(maasives);
//
//
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let masivesr = ['Yura', 'Andrij', 'Petro', 'Jaroslav', 'Sergij', 'ifpat', 'Bart', 'Grisza', 'Tolik', 'Roksolana'];
// document.write(masivesr);
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let somem = [123, 32, 'we', 4, 'eifjmdos'];
// document.write(somem);
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let p = [ 21,false, 2, true, 'sometxt',23, 'txt',  true, 'metxt', true];
// let y=0;
// while (y<p.length) {
// let a = typeof p[y];
//     if (a === 'boolean') {
//         console.log(a + '  ' + p[y]);
//     }
//     y++;
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let p = [ 21,false, 2, true, 'sometxt',23, 'txt',  true, 'metxt', true];
// let y=0;
// while (y<p.length) {
//     let a = typeof p[y];
//     if (a === 'number') {
//         console.log(a + '  ' + p[y]);
//     }
//     y++;
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let p = [ 21,false, 2, true, 'sometxt',23, 'txt',  true, 'metxt', true];
// let y=0;
// while (y<p.length) {
//     let a = typeof p[y];
//     if (a === 'string') {
//         console.log(a + '  ' + p[y]);
//     }
//     y++;
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let a = [];
//  a[0] = 123;
//  a[1] = 'sonce';
//  a[2] = true;
//  a[4] = false;
//  a[5] = 332;
//  a[6] = 222;
//  a[7] = 'lorem';
//  a[8] = true;
//  a[9] = 12;
//  a[10] = 'logo';
//
//  for (let i = 0; i<a.length; i++) {
//      console.log(a[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// let a = [];
//  a[0] = 123;
//  a[1] = 'sonce';
//  a[2] = true;
//  a[4] = false;
//  a[5] = 332;
//  a[6] = 222;
//  a[7] = 'lorem';
//  a[8] = true;
//  a[9] = 12;
//  a[10] = 'logo';
//
//  for (let i = 0; i<a.length; i++) {
//     document.write(i);
//      console.log(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// let a = [];
// a[0] = 123;
// a[1] = 'sonce';
// a[2] = true;
// a[4] = false;
// a[5] = 332;
// a[6] = 222;
// a[7] = 'lorem';
// a[8] = true;
// a[9] = 12;
// a[10] = 'logo';
//
// for (let i = 0; i<100; i++) {
//     document.write(i);
//     console.log(a[i]);
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// let a = [];
// a[0] = 123;
// a[1] = 'sonce';
// a[2] = true;
// a[4] = false;
// a[5] = 332;
// a[6] = 222;
// a[7] = 'lorem';
// a[8] = true;
// a[9] = 12;
// a[10] = 'logo';
//
// for (let i = 0; i<100; i=i+2) {
//     document.write(i);
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// let a = [];
// a[0] = 123;
// a[1] = 'sonce';
// a[2] = true;
// a[4] = false;
// a[5] = 332;
// a[6] = 222;
// a[7] = 'lorem';
// a[8] = true;
// a[9] = 12;
// a[10] = 'logo';
//
// for (let i = 0; i<100; i++) {
//     if (i % 2 === 0) {
//         document.write(i);
//         console.log(i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

let a = [];
a[0] = 123;
a[1] = 'sonce';
a[2] = true;
a[4] = false;
a[5] = 332;
a[6] = 222;
a[7] = 'lorem';
a[8] = true;
a[9] = 12;
a[10] = 'logo';

for (let i = 0; i<100; i++) {
    if (i % 2 === 0) {

    }
    else
        {
            document.write(i);
            console.log(i);
        }
    }
