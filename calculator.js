/*What I want to accomplish is to have readline take user input to choose from a list of functions, then to take input again in the form of numbers to execute that function. I intend on coming back to refactor my code to accomplish that when I am caught up with course.
*/

const readline = require('readline-sync');

console.log("Welcome to the calcu-later program, please choose from among these available operations:\nAbsolute Value\nPower Calculation\nSquare Root Finder\nMax and Min Finder\nRandom Number Generator\nCustom Rounding\n");


const userInput = readline.question("Please enter a choice of function:\n ");

const userInputNum = readline.questionInt("Please enter a number:\n ")



const calculatorProgram = {
    programName: "Calc-U-later Nerd",

    absoluteVal: function(num) {
        return Math.abs(num);
     },

    sqrRoot: function(num) {
        return Math.sqrt(num);
    },

    powerCalc: function(num1, num2) {
        return Math.pow(num1, num2);
    },

    maxAndMin: function() {


    },

    //How to restrict range to 50?
    randNum: function(num) {
        return Math.round(Math.random() * 10);
    },    

    customRound: function(num1, num2) {


    }




};


    
