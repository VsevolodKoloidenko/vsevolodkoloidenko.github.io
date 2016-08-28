function myMathPow() {
  var num = prompt('Введите число', 0);
  var exp = prompt('Введите степень', 2);
  var result;

  result = num;

  if ( exp == 0){
    result = 1;
  }
else {

  for (var i = 1; i < exp; i++) {
    result *= num;
    console.log('result =', result);
  }
}

  console.log(num, ' in ', exp, ' = ', result);
}

myMathPow();
