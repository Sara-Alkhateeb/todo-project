'use strict';

var inputName = prompt("Please enter your name: ");
var inputGender = prompt("Please enter your gender: male - female ");
var inputAge = prompt("Please enter your age: ");

if (inputAge <= 0) {
    alert("Wrong input")

}

var confirMsgResult = confirm("Skip the welcoming message? ");

if (confirMsgResult == true) { console.log(confirMsgResult) }
else {
    switch (inputGender) {
        case (inputGender = 'female'):
            var G = "Ms.";
            alert("Hello from our side to " + G + inputName)
            break;

        case (inputGender = 'male'):
            var G = "Mr."
            alert("Hello from our side to " + G + inputName)
            break;

        default:
            alert("Hello from our side");
            break;
    }
}

var inputYesNoQ1 = prompt("Are you a student: Yes or No ");
while (inputYesNoQ1 === "") {
    inputYesNoQ1 = "invalid" 
};

var inputYesNoQ2 = prompt("Are you graduated : Yes or No ");
while (inputYesNoQ2 === "") {
    inputYesNoQ2 = "invalid" 
};

var inputYesNoQ3 = prompt("Are you an employee : Yes or No ");
while (inputYesNoQ3 === "") {
    inputYesNoQ3 = "invalid" 
};

let ArrQ = [inputYesNoQ1, inputYesNoQ2, inputYesNoQ3];
console.log(ArrQ);