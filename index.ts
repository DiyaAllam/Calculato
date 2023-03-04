function sum(mynum1: number, mynum2: number) {
  let result: number;
  result = mynum1 + mynum2;
  console.log(mynum1 + '+' + mynum2 + '=' + result);
}

function neg(mynum1: number, mynum2: number) {
  let result: number;
  result = mynum1 - mynum2;
  console.log(mynum1 + '-' + mynum2 + '=' + result);
}

function multiply(mynum1: number, mynum2: number) {
  let result: number;
  result = mynum1 * mynum2;
  console.log(mynum1 + 'x' + mynum2 + '=' + result);
}

function substract(mynum1: number, mynum2: number) {
  let result: number;
  result = mynum1 / mynum2;
  console.log(mynum1 + '÷' + mynum2 + '=' + result);
}

let myNum1: number;
let myNum2: number;
let sympol: string;

myNum1 = parseInt(prompt('ادخل الرقم الاول'));
sympol = prompt('ادخل االعمليه');
myNum2 = parseInt(prompt('ادخل الرقم الثاني'));

if (sympol == '+') {
  sum(myNum1, myNum2);
} else if (sympol == '-') neg(myNum1, myNum2);
else if (sympol == '*') multiply(myNum1, myNum2);
else if (sympol == '/') {
  substract(myNum1, myNum2);
}
