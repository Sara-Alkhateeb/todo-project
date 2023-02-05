'use strict';

var inputName = prompt("Please enter your name: ");
var inputGender = prompt("Please enter your gender: male - female ");
var inputAge = prompt("Please enter your age: ");

if(inputAge <= 0)
{
    alert("Wrong input")

}
var confirMsgResult = confirm("Skip the welcoming message? ");

switch (inputGender){
case(inputGender = 'female'):
   var G="Ms.";
   alert ("Hello from our side to " + G + inputName)
   break;

case(inputGender = 'male'):
 var G ="Mr."
 alert ("Hello from our side to " + G + inputName)
 break;
 
 default:
    alert("Hello from our side");
break;}


