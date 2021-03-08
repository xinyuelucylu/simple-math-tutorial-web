
var instructions = document.getElementById("instructions");
var startBtn = document.getElementById("startBtn");
var quiz=document.getElementById("quiz");
var timesout = document.getElementById("timesout");

var submit=document.getElementById("submitButton");
var home=document.getElementById("home");
var cs1=document.getElementById("correctString1");
var cs2=document.getElementById("correctString2");
var cs3=document.getElementById("correctString3");
var cs4=document.getElementById("correctString4");


window.onload=beginQuiz;

function beginQuiz(){
    instructions.style.display="block";
    quiz.style.display="none";
    
    
}

function start(){
    instructions.style.display="none";
    quiz.style.display="block";
    submit.style.display="inline-block";
    home.style.display="none";
    startTimer();
}



document.getElementById('timer').innerHTML =
  005 + ":" + 00;


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;

  myvar= setTimeout(startTimer, 1000);
  
  if(m==0&&s==0){
    alert("Time's up");
    quiz.style.display="none";
    submit.style.display="none";
    timesout.style.display="block";
  }
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}


// scripts here:

	function submitQuiz() {
		console.log('submitted');

	// get each answer score
		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// change NaNs to zero
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

	// calc score with answerScore function
		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
		console.log("CalcScore: " + calcScore); // it works!

	// print correct answers only if wrong (calls correctAnswer function)
		if (answerScore('q1') === 0) {
            cs1.style.color="#25e705";	
		}
		if (answerScore('q2') === 0) {
			cs2.style.color="#25e705";	
		}
		if (answerScore('q3') === 0) {
			cs3.style.color="#25e705";	
		}
		if (answerScore('q4') === 0) {
			cs4.style.color="#25e705";	
		}


	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// show score as "score/possible score"
		var showScore = "Your Score: " + calcScore +"/" + questionCounter;
	// if 4/4, "perfect score!"
		if (calcScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
		};
		document.getElementById('userScore').innerHTML = showScore;
	}


$(document).ready(function() {

	$(submit).click(function() {
		$(this).addClass('hide');
        submit.style.display="none";
        home.style.display="inline-block";
        clearTimeout(myvar);
	});

});







