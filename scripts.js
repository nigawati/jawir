

// let result=0;
// const maxLimit=8;
// const operator= document.querySelectorAll('.operator button');
// const display=document.getElementById('displaycontainer');

// const a=display.textContent;
// const numbers = document.querySelectorAll('.row1 button, .row2 button, .row3 button, .row4 button');
// const d=[...numbers];
// display.value=0;

// const one=d[0].addEventListener('click',()=>{
//   if (display.value.length < maxLimit) {
//     display.value += 1; // Appends only if under the limit
//   }
// });
// const two=d[1].addEventListener('click',()=>{
//   if (display.value.length < maxLimit) {
//     display.value += 2; // Appends only if under the limit
//   }
// });

// const three=d[2].addEventListener('click',()=>{
//   if (display.value.length < maxLimit) {
//     display.value += 3; // Appends only if under the limit
//   }
// });
// const four=d[3].addEventListener('click',()=>{
//   if (display.value.length < maxLimit) {
//     display.value += 4; // Appends only if under the limit
//   }
// });
// const five=d[4].addEventListener('click',()=>{
//   if (display.value.length < maxLimit) {
//     display.value += 5; // Appends only if under the limit
//   }
// });
// const six=d[5].addEventListener('click',()=>{
//   if (display.value.length < maxLimit) {
//     display.value += 6; // Appends only if under the limit
//   }
// });
// const seven=d[6].addEventListener('click',()=>{
//   if (display.value.length < maxLimit) {
//     display.value += 7; // Appends only if under the limit
//   }
// });
// const eight=d[7].addEventListener('click',()=>{
//   if (display.value.length < maxLimit) {
//     display.value += 8; // Appends only if under the limit
//   }
// });
// const nine=d[8].addEventListener('click',()=>{
//   if (display.value.length < maxLimit) {
//     display.value += 9; // Appends only if under the limit
//   }
// });
// const zero=d[9].addEventListener('click',()=>{
//   if (display.value.length < maxLimit) {
//     display.value += 0; // Appends only if under the limit
//   }
// });
// const clear = operator[0].addEventListener('click',()=>{
//     result = 0;
//     display.value="";
// });
// const plus = operator[1].addEventListener('click',()=>{
//     result+=Math.round(parseInt(display.valueAsNumber));
//     display.value="";
//     display.value=result;
// });
// const minus = operator[2].addEventListener('click',()=>{
//     result-=Math.round(parseInt(display.valueAsNumber));
//     display.value="";
//     display.value=result;
// });
// const multiply = operator[3].addEventListener('click',()=>{
//    result*=Math.round(parseInt(display.valueAsNumber));
//     display.value="";
//     display.value=result;
// });
// const divide = operator[4].addEventListener('click',()=>{
  
//     result/=Math.round(parseInt(display.valueAsNumber));
//     display.value="";
//     display.value=result;
// });
// const sum = operator[5].addEventListener('click',()=>{
//     result=Math.round(parseInt(display.valueAsNumber));
//     display.value="";
//     display.value=result;
// });
let previousValue = 0;
let currentOperator = null;
let shouldResetDisplay = false;
const maxLimit = 8;

const display = document.getElementById('displaycontainer');
const numbers = document.querySelectorAll('.row1 button, .row2 button, .row3 button, .row4 button');
const operators = document.querySelectorAll('.operator button');

// 1. Handle Number Buttons
numbers.forEach((button, index) => {
    // Mapping the array index to the correct number value
    const numValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const value = numValues[index];

    button.addEventListener('click', () => {
        // Clear display if an operator was just pressed
        if (shouldResetDisplay) {
            display.value = '';
            shouldResetDisplay = false;
        }

        if (display.value.length < maxLimit) {
            display.value += value;
        }
    });
});

// 2. Handle Operator Buttons
const clearBtn = operators[0];
const plusBtn = operators[1];
const minusBtn = operators[2];
const multiplyBtn = operators[3];
const divideBtn = operators[4];
const sumBtn = operators[5];

function handleOperator(op) {
    previousValue = parseFloat(display.value) || 0;
    currentOperator = op;
    shouldResetDisplay = true; // Next number press wipes the display
}

plusBtn.addEventListener('click', () => handleOperator('+'));
minusBtn.addEventListener('click', () => handleOperator('-'));
multiplyBtn.addEventListener('click', () => handleOperator('*'));
divideBtn.addEventListener('click', () => handleOperator('/'));

// 3. Handle Equals (=)
sumBtn.addEventListener('click', () => {
    if (!currentOperator || shouldResetDisplay) return;

    const currentValue = parseFloat(display.value) || 0;
    let result = 0;

    switch (currentOperator) {
        case '+': result = previousValue + currentValue; break;
        case '-': result = previousValue - currentValue; break;
        case '*': result = previousValue * currentValue; break;
        case '/': result = currentValue !== 0 ? previousValue / currentValue : "Error"; break;
    }

    // Round to avoid crazy decimal floating-point bugs (e.g., 0.1 + 0.2)
    display.value = typeof result === 'number' ? Math.round(result * 100000) / 100000 : result;
    
    currentOperator = null;
    shouldResetDisplay = true;
});

// 4. Handle Clear (C)
clearBtn.addEventListener('click', () => {
    previousValue = 0;
    currentOperator = null;
    display.value = '';
    shouldResetDisplay = false;
});