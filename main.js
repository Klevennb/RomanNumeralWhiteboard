let answer;
function romanNumerals(num) {
    let indDig = num[0];
    switch (num.length) {
    case 4:
        
        break;

    default:
        console.log('error, invalid number');
        break;
}
    realDigits.shift();
}
function tenOrLess(num) {
    let indDig;
    let answer;
    let digits = num.toString().split('');
    let realDigits = digits.map(Number);
    console.log(realDigits);

    if (realDigits.length>5) {
        console.log('input too big');
    } else if (realDigits.length === 5){
        indDig = realDigits[0]
        console.log(indDig+4);
        realDigits.shift();
        console.log(realDigits);
        
        
    } else if (realDigits.length === 4) {
        console.log('hi');
        
    } else if (realDigits.length === 3) {

    } else if (realDigits.length === 2) {

    } else if (realDigits.length === 1) {
        
    }
}
tenOrLess(99);
tenOrLess(99999);