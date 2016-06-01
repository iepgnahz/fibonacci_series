'use strict';
function fibonacci_series(n) {
  var arr = [0];
  if(n == 1){
    arr.push(1);
  } else {
    arr = [0,1];
    for(var i = 2;i <= n; i++){
      arr.push(fb(i));
    }
  }
  return arr;
}
function fb(i){
  if(i == 0) {
    return 0;
  }
  if(i == 1) {
    return 1;
  } else {
    return fb(i - 1) + fb(i - 2);
  }
}

module.exports = fibonacci_series;
