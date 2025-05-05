//Math Operators//

//Logic for adding numbers//
function toAdd(num1,num2) {
    return num1 + num2;
};

//Logic for subtracting numbers//
function toSubtract(num1,num2) {
    return num1 - num2;
};

//Logic for multiplying numbers//
function toMultiply(num1,num2) {
    return num1 * num2;
};

//Logic for dividing numbers//
function toDivide(num1,num2) {
    return num1/num2;
};

//3 Variables for math operation//
let firstNum;
let secondNum;

let mathOperator;

//Operation logic//
function operate(mathOperator,firstNum,secondNum) {
let result;

if(mathOperator == '+') {
    result = toAdd(firstNum,secondNum)
} else if(mathOperator == '-') {
    result = toSubtract(firstNum,secondNum)
} else if(mathOperator == '*') {
    result = toMultiply(firstNum,secondNum)
} else if(mathOperator == '/') {
    result = toDivide(firstNum,secondNum)
} else {
    result ='Invalid Operation'
};

return result;
};

//Logic for populating display//
