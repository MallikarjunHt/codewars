function squareDigits(num){
    //may the code be with you
   
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));;
  }