//Math Operators//

//Logic for adding numbers//
function toAdd(num1,num2) {
    return parseInt(num1) + parseInt(num2);
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

//Logic for returning remainder//
function toRemainder(num1,num2) {
    return num1 % num2;
};

//3 Variables for math operation//
let firstNum = '';
let mathOperator = '';
let secondNum = '';

//Operation logic//
function operate(mathOperator,firstNum,secondNum) {
let result;

if(mathOperator == '+') {
    result = toAdd(firstNum,secondNum)
} else if(mathOperator == '-') {
    result = toSubtract(firstNum,secondNum)
} else if(mathOperator == 'x') {
    result = toMultiply(firstNum,secondNum)
} else if(mathOperator == '÷') {
    result = toDivide(firstNum,secondNum)
} else if(mathOperator == '%') {
    result = toRemainder(firstNum,secondNum)
} else if(mathOperator == '÷' && secondNum == '0') {
    result = 'MATH ERROR'
}
  else {
    result ='Invalid Operation'
};

return result;
};

//Logic for populating display//
let content = document.querySelector(".operand");
let numbers = document.querySelectorAll("#nums");
let signs = document.querySelectorAll("#signs");
let equalSign = document.querySelector(".equals");
let allClear = document.querySelector(".clear");

function populateNums() {numbers.forEach(btn => btn.addEventListener('click', e=>{
    const buttonClicked = e.target.innerText;
    secondNum += buttonClicked;
    content.textContent = secondNum;
}));
};
populateNums();

function populateSigns() {
    signs.forEach(btn => btn.addEventListener('click', e => {
        const signClicked = e.target.innerText;
        firstNum = secondNum;
        mathOperator = signClicked;
        secondNum = '';
    }))
};
populateSigns();


//Logic for working the calculator//
function runCalc() {
    let result = '';

    result = operate(mathOperator,firstNum,secondNum);
    secondNum = result;
    mathOperator = '';
};

function equals() {
    equalSign.addEventListener('click', ()=> {
        runCalc();
        content.textContent = secondNum;
    })
};
equals();

//Logic for clearing calc screen//
function clearScreen() {
    allClear.addEventListener('click', () => {
        firstNum = '';
        mathOperator = '';
        secondNum = '';
        content.textContent = 0;
    })
};
clearScreen();
/*AN IDEA: Consider changing the HTML element IDs such that all number buttons have their
own ID, while all arithmetic operations have their own IDs. Create 2 node variables for each
then create two functions using each node to populate the display. Create a new function for 
running the calc. Create 2 variables for each of the 2 previous functions, then use them as 
parameters in the operate function. Call the operate function.
*/