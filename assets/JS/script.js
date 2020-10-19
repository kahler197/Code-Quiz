var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");

var quizQuestions = [
    
{
    question: "What is the CSS in 'CSS' short for?",

    choice1: "Cascading Style Sheets",
    choice2: "Cascading Super Sheets",
    choice3: "Corrugated Steel Sheets",
    choice4: "Congruent Style Sheets",
    correctAnswer: "1"
},

{
    question: "What technology is used most for styling a web application?",

    choice1: "JavaScript",
    choice2: "CSS",
    choice3: "HTML",
    choice4:"C+",
    correctAnswer: "2"
},

{
    question: "What is 'DOM' short for?",

    choice1: "Data object model",
    choice2: "Document object maker",
    choice3: "Document object model",
    choice4: "Data object matter",
    correctAnswer: "3"
},

{
    question: "What is the proper syntax for lining an external script called 'script.js'?",

    choice1: "<script href='script.js'>",
    choice2: "<script link='script.js'>",
    choice3: "<script id='script.js'>",
    choice4: "<script src='script.js'>",
    correctAnswer:"4" 
    
},

{
    question: "What type of pop up will allow for a user to type a response?",

    choice1: "textArea",
    choice2: "alert",
    choice3: "prompt",
    choice4: "input",
},

];

function generateQuizQuestion(){}