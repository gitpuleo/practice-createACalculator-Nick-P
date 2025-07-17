/*What I want to accomplish is to have readline take user input to choose from a list of functions, then to take input again in the form of numbers to execute that function. I intend on coming back to refactor my code to accomplish that when I am caught up with course.
*/

const { use } = require('react');
const readline = require('readline-sync');

console.log("Welcome to the calcu-later program, please choose from among these available operations:\nAbsolute Value\nPower Calculation\nSquare Root Finder\nMax and Min Finder\nRandom Number Generator\nCustom Rounding\n");


const userInput = readline.question("Please enter a choice of function:\n ");


//Second number input as userInputNum2? In which case, how to trigger only if there are two parameters in the function--that is, how to check function for number of parameters? Or is there a better way I am missing?
//Yes, there was a better way: handle instead with conditional logic, much less convoluted


const calculatorProgram = {
    programName: "Calc-U-later Nerd",

    absoluteVal: function(num) {
        return Math.abs(num);
     },

    sqrRoot: function(num) {
        return Math.sqrt(num);
    },

    powerCalc: function(baseNum, exponentNum) {
        return Math.pow(baseNum, exponentNum);
    },

    //best way to return max and min at same time? 
    maxAndMin: function(arrayOfNums) {
        let min = arrayOfNums[0];
        let max = arrayOfNums[0];

        for(let i = 0; i < arrayOfNums.length; i++) {
            let currentNum = arrayOfNums[i];
            if (currentNum < min) min = currentNum;
            if (currentNum > max) max = currentNum;
        }
        return (min, max);
    },


    randNum: function() {
        return Math.floor(Math.random() * 50);
    },    


   //num1 is number to round, num2 is number of decimal places to round to
    customRound: function(num, decimalPlaceNum) {
        let factoredNum = Math.pow(10, decimalPlaceNum)
        return Math.round(num * factoredNum) / (factoredNum);
    }


};

let result;

if (userInput === "absolute value") {
    let num = readline.questionInt("Input number: ");
    result = calculatorProgram.absoluteVal(num);

} else if (userInput === "square root finder") {
    let num = readline.questionInt("Input number: ");
    result = calculatorProgram.sqrRoot(num);
} else if (userInput === "power calculation") {
    let base = readline.questionInt("First, enter the base: ");
    let exponent = readline.questionInt("Now, enter the exponent: ");
    result = calculatorProgram.powerCalc(base, exponent);
} else if (userInput === "max and min finder") {
    let arrayOfNums = readline.question("Enter an array of numbers to evalutate: ");
    result = calculatorProgram.maxAndMin(arrayOfNums);

} else if (userInput === "random number generator") {
    result = calculatorProgram.randNum();

} else if (userInput === "custom rounding") {
    let num = readline.questionInt("Enter a number to round, then how many decimal places it should be rounded to: ");
    let decimalPlaceNum = readline.questionInt("Number of demical places: ");
    result = calculatorProgram.customRound(num, decimalPlaceNum);
} else {
    result = "Input error, please try again.";
}

console.log("Results: ", result);




//Notes for refactoring: 
//For customRound, sub in strings for nums? 
