//////////////////// Question Bank Array ////////////////////
var qBank = [
  {
  //set1
    category: "JavaScript",
    question: "What does the following expression return? <br> 3 / 'bob';",
    choices: ["undefined", "ReferenceError", "NaN"],
    answer: "NaN"
  }, {
  //set2
    category: "JavaScript",
    question: "What is a method?",
    choices: ["Used to describe an object.", "A function assigned to an object.", "Performs a function on one or more operands or variables."],
    answer: "A function assigned to an object."
  }, {
  //set3
    category: "JavaScript",
    question: "Which company first implemented the JavaScript language?",
    choices: ["Netscape Communications Corp.", "Microsoft Corp.", " Sun Microsystems Corp."],
    answer: "Netscape Communications Corp."
  }, {
    category: "CSS",
    question: "When was the first release of a browser supporting JavaScript?",
    choices: ["1996", "1995", " 1994"],
    answer: "1995"
  }, {
    category: "CSS",
    question: "The original name of JavaScript was?",
    choices: ["LiveScript", "ECMAScript", "WireScript"],
    answer: "LiveScript"
  }, {
    category: "CSS",
    question: "Which of the following browsers was the first to support JavaScript?",
    choices: ["Microsoft Internet Explorer 2.0 beta", "Netscape Navigator 2.0 beta", "Opera 2.0 beta"],
    answer: "Netscape Navigator 2.0 beta"
  }, {
    category: "HTML",
    question: "Applying a function to a value and creating a new value is called what?",
    choices: ["declaration", "projection", "expression"],
    answer: "projection"
  }, {
    category: "HTML",
    question: "Another question?",
    choices: ["1st answer", "2nd answer", "real answer"],
    answer: "real answer"
  }, {
    category: "HTML",
    question: "question?",
    choices: ["1st answer", "2nd answer", "real answer"],
    answer: "real answer"
  }
]
////////////////// END Question Bank Array //////////////////

//set default degree (360*5)
var degree = 1800;
//number of clicks = 0
var clicks = 0;

var index = 0;


//change innerHTML of btn elements to reflect choices
var appendQuestions = function(index) {
  $('#qBox').append("<h3>"+qBank[index].question+"</h3>");
  $('#A').append("<h5>"+qBank[index].choices[0]+"</h5>");
  $('#B').append("<h5>"+qBank[index].choices[1]+"<h5>");
  $('#C').append("<h5>"+qBank[index].choices[2]+"<h5>");
  $('#qBox').append("<div name=" + qBank[index].answer +">"+ "</div>")
}

$(document).ready(function() {
  /*WHEEL SPIN FUNCTION*/
$('#spin').click(function(){

  $('#qBox').empty();
  $('#A').empty();
  $('#B').empty();
  $('#C').empty();
  $('#qBox').empty();

  index ++

  appendQuestions(index);

  //added timeout function for when form should appear
  var delay = 6100;
  function showForm(){
    $("#formWrapper").show();
  }
  setTimeout(showForm, delay)


  //add 1 every click
  clicks ++;

  /*multiply the degree by number of clicks
  generate random number between 1 - 360,
  then add to the new degree*/
  var newDegree = degree*clicks;
  var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
  totalDegree = newDegree+extraDegree;

  /*let's make the spin btn to tilt every
  time the edge of the section hits
  the indicator*/
  $('#wheel .sec').each(function(){
    var t = $(this);
    var noY = 0;
    var c = 0;
    var n = 700;

    var interval = setInterval(function () {
      c++;
      if (c === n) {
        clearInterval(interval);
      }

      var aoY = t.offset().top;

      $('#txt').html(aoY);

      /*23.7 is the minumum offset number that
      each section can get, in a 30 angle degree.
      So, if the offset reaches 23.7, then we know
      that it has a 30 degree angle and therefore,
      exactly aligned with the spin btn*/
      if(aoY < 23.89){
        $('#spin').addClass('spin');
        setTimeout(function () {
          $('#spin').removeClass('spin');
        }, 100);

      }
    }, 10);


    //inner wheel spins functionality
      $('#inner-wheel').css({
        'transform' : 'rotate(' + totalDegree + 'deg)'
      });

    noY = t.offset().top;

  });

});

});

