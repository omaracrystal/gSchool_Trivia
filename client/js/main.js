// add scripts
$(document).ready(function() {
    console.log("The document is ready!");

$("#formWrapper").hide();

$("#addForm").hide();

$("#gitUserName").hide();

//DOCUMENT ready
});

////////////////////Utilities////////////////////
//shuffle function for question bank
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
////////////////////end of Utilities////////////////////


////////////////////Click Events////////////////////
//////SCORE KEEPER
score = 0;

$(".btn.choice").on("click", function() {

  var userChoice = $(this).text();
  var answer = qBank[index].answer;

  console.log(userChoice);
  console.log(answer);

  if (answer == userChoice)  {
    //add point
    score += 1;
    } else {
    //take away point
    score -= 1;
    }
    //delay then hide it
  $("#formWrapper").hide();
  //clear out score
  $("#scoreKeeper").empty();
  //append score to DOM
  $("#scoreKeeper").append(score);
  console.log(score);

});

//////SHOW OR HIDE > ADD QUESTION FORM
//show form
$('#btnAddQ').on("click", function(){
  $("#addForm").show();
});

//hide form
$("#cancel").on("click", function (){
  $("#addForm").hide();
});


//////"ADD YOUR OWN QUESTION FORM" FUNCTIONALITY
$("#add").on("click", function (e){
  e.preventDefault();

  //grab input values
  var addCategory = $('select:eq(0)').val();
  var addQuestion = $('input:eq(0)').val();
  var addAnswer = $('input:eq(1)').val();
  var addWrong1 = $('input:eq(2)').val();
  var addWrong2 = $('input:eq(3)').val();

  //create a new object for qBank array
  var addQuestion = {category: addCategory, question: addQuestion, answer: addAnswer, choices: [addWrong1,addWrong2, addAnswer]};

  //push new questions to qBank
  qBank.push(addQuestion);

  //clear out input fields
  $('select:eq(0)').val("");
  $('input:eq(0)').val("");
  $('input:eq(1)').val("");
  $('input:eq(2)').val("");
  $('input:eq(3)').val("");

  //hide form after submiting new question
  $("#addForm").hide();

  return(qBank);
});


//////USER MENU FUNCTIONALITY
$("#menu").on("mouseover", function (){
  $("#gitUserName").show();
});

$("#menu").on("mouseout", function (){
  $("#gitUserName").hide();
});

$("#menu").on("click", function (){
  $("#gitUserName").show();
});

////////////////////End of Click Events////////////////////
