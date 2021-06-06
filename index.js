var readlineSync = require("readline-sync");
var chalk = require('chalk');
var score = 0;

var highScores = [
  {
    name:"Yash",
    score:4,
  }
]

var questions = [{
  question:chalk.red("What is my nickname? "),
  answer:"yash"
},
{
  question:chalk.red("What is my pet's name? "),
  answer:"Jacky"
},
{
  question:chalk.red("Am I a beach or Mountain person? "),
  answer:"beach"
},
{
  question:chalk.red("Am I a hollywood or a bollywood fan? "),
  answer:"hollywood"
},
{
  question:chalk.red("What am I mostly? introvert or extrovert? "),
  answer:"introvert"
},
{
  question:chalk.red("Which is my favorite movie? "),
  answer:"Prestige"
}

];


function welcome(){
  console.log("------------------------------"+chalk.green.bold("Let's have fun!")+"----------------------------------------");
  var userName = readlineSync.question("What's your name? ");
  console.log("");
  console.log("Welcome "+ chalk.yellow.bold(userName) +"."+" Nice to have you here...How well do you know me? Hmmm...Let's see");
  console.log("");
}
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(answer.toUpperCase()==userAnswer.toUpperCase()){
    console.log("You're Right!");
    score=score+1;
  }
  else{
    console.log("You're Wrong!");
  }
  console.log("Current Score is - ", score);
  console.log("-------------------------------------");
}
function game(){
  for(var i =0;i<questions.length;++i){
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer);
  }
}
function showScore(){
  console.log(chalk.keyword("orange")("Your final score is : ", score));
  console.log("");

  highScores.map(highestScore);
}

function highestScore(){
  var currentScore=score;
  var i = 0;
  // for(var i =0;i<highScores.length;++i){
    if(currentScore>highScores[i].score){
    console.log(chalk.green("Congratulations buddy! you have scored the highest....I am flattered that you know me so well..."));
    }
}

welcome()
game()
showScore()