enum Color { BLACK, YELLOW, RED=8, GREEN };

let col1:Color=Color.BLACK;
console.log(col1);

console.log(Color.YELLOW);

console.log(Color.GREEN);

console.log(Color[1]);


// это не enum

let myStr:'First'|'Second';
let myStr2:5|'Second';

myStr='Second';
myStr2=5;
// myStr='Third'; // ошибка
