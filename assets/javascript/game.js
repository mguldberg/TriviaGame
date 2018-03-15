/**
 * hw #5 -jQuery - trivia - game.js
 **/

// VARIABLES
// ==========================================================================
//

//will be loaded with value from onclick
var answer;

//index of currentQuestion in Obj
var currentQuestion = 0;

//variables for timer
var timeIsUp = false;
var gameTimerCounter = 25; //seconds left on each Q

var answerTimer;
var numberCorrect = 0;
var numberWrong = 0;
var numberTimeouts = 0;

// FUNCTIONS
// ==============================================================================
//

// remove class from an HTML element
function showElement(elementName) {
    console.log(elementName);
    $(elementName).removeClass("d-none");
}

// remove class from an HTML element
function changeTextInDisplay(elementName, textToChange) {
    console.log(elementName);
    $(elementName).text(textToChange);

}

// display the next question
function nextQuestion() {


    console.log(questionsObj["Q" + currentQuestion].question);
    console.log(questionsObj["Q" + currentQuestion].choices[0]);
    console.log(questionsObj["Q" + currentQuestion].choices[1]);
    console.log(questionsObj["Q" + currentQuestion].choices[2]);
    console.log(questionsObj["Q" + currentQuestion].choices[3]);

    $("#question").text(questionsObj["Q" + currentQuestion].question);
    $("#answer-choice-1").text(questionsObj["Q" + currentQuestion].choices[0]);
    $("#answer-choice-2").text(questionsObj["Q" + currentQuestion].choices[1]);
    $("#answer-choice-3").text(questionsObj["Q" + currentQuestion].choices[2]);
    $("#answer-choice-4").text(questionsObj["Q" + currentQuestion].choices[3]);

}

function gameInit() {
    //Hide the divs not needed on the opening screen
    $("#question-answer-container").hide();
    $("#questions-container").hide();
    $("#results-container").hide();
}

function showAnswer(reason) {

    console.log(questionsObj["Q" + currentQuestion].correctAnswer);
    console.log("checking to see if correct or not")

    var correctAnswerIndex = questionsObj["Q" + currentQuestion].correctAnswer
    if (reason == "timeout") {
        $("#correct-not-correct-text").text("Too late!");
        //The correct answer was ...
        $("#question-answer-response").text("The correct answer was " + questionsObj["Q" + currentQuestion].choices[correctAnswerIndex] + ".");

    }
    else if (answer == questionsObj["Q" + currentQuestion].correctAnswer) {
        questionsObj["Q" + currentQuestion].userAnswer = true;
        $("#correct-not-correct-text").text("That was correct!");
        $("#question-answer-response").text("");

    }
    else {
        console.log(" The correct answer was: " + questionsObj["Q" + currentQuestion].choices[correctAnswerIndex]);
        questionsObj["Q" + currentQuestion].answer = false;
        $("#correct-not-correct-text").text("Nope.");
        //The correct answer was ...
        $("#question-answer-response").text("The correct answer was " + questionsObj["Q" + currentQuestion].choices[correctAnswerIndex] + ".");

    }

    $("#answer-img").html('<img src="' + questionsObj["Q" + currentQuestion].answerImage + ' ">');
    $(".questions-and-answers").hide();
    $("#question-answer-container").show();


}

//check if time has expired to answer a question
function checkIfQuestionTimeIsExpired() {
    // write timer change to the screen
    $("#countdown-time").text(gameTimerCounter);

    gameTimerCounter--; // deduct 1 second
    console.log(gameTimerCounter);

    // write timer change to the screen
    $("#countdown-time").text(gameTimerCounter);

    //did we detect a timeout waiting for an answer?
    //  if yes - count the timeout and display the answer then got to next question
    if (gameTimerCounter == 0) {
        console.log("inside Game Time =0");
        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(gameTimer);


        //increment number of timeouts
        numberTimeouts++;

        console.log("there was a timeout");

        showAnswer("timeout");

        answerTimer = setInterval(checkIfAnswerTimeIsExpired, 1000);

    }


}

function checkIfAnswerTimeIsExpired() {
    console.log("inside Answer Time =0");
    // Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(answerTimer);

    //move on to the next question
    currentQuestion++;

    //check if game is over
    if (currentQuestion == 20) {
        // tabulate the results
        for (i = 0; i < currentQuestion; i++) {

            if (questionsObj["Q" + i].userAnswer == true) {
                numberCorrect++;
                console.log("number correct:" + numberCorrect);


            }
            else {
                numberWrong++;
                console.log("number wrong/timeout:" + numberWrong + "-" + numberTimeouts);
            }
        }

        $("#results").text("You got " + numberCorrect + "correct.  Of the ones you got wrong, "
            + numberTimeouts + "were because you didn't answer quickly enough.");


        $("#question-answer-container").hide();
        $("#results-container").show();

    }
    else {
        $("#question-answer-container").hide();
        $(".questions-and-answers").show();
        nextQuestion();
        gameTimer = setInterval(checkIfQuestionTimeIsExpired, 1000);
        //reset gameTimer
        gameTimerCounter = 25;

    }

}

//
// MAIN PROCESS
// ==============================================================================
//

var questionsObj = {
    Q0: {
        question: "What is the color of the sky?",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 0,
        answerImage: "assets/images/inspector-gadget.jpg",
        userAnswer: false
    },
    Q1: {
        question: "What is the color of the sky?4",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 1,
        answerImage: "assets/images/u-of-m-block-m.png",
        userAnswer: false

    },
    Q2: {
        question: "What is the color of the sky?8",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 3,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q3: {
        question: "What is the color of the sky?12",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q4: {
        question: "What is the color of the sky?16",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q5: {
        question: "What is the color of the sky?20",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q6: {
        question: "What is the color of the sky?24",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q7: {
        question: "What is the color of the sky?28",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q8: {
        question: "What is the color of the sky?32",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q9: {
        question: "What is the color of the sky?36",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q10: {
        question: "What is the color of the sky?40",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q11: {
        question: "What is the color of the sky?44",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q12: {
        question: "What is the color of the sky?48",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q13: {
        question: "What is the color of the sky?52",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q14: {
        question: "What is the color of the sky?56",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q15: {
        question: "What is the color of the sky?60",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q16: {
        question: "What is the color of the sky?64",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q17: {
        question: "What is the color of the sky?68",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q18: {
        question: "What is the color of the sky?72",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },
    Q19: {
        question: "What is the color of the sky?76",
        choices: ["blue", "green", "orange", "gold"],
        correctAnswer: 2,
        answerImage: "assets/images/djdkfj.jpg",
        userAnswer: false

    },

};


// Captures keyboard input. Depending on the letter pressed it will "call " (execute) different functions.
$(document).ready(function () {

    //reset the game
    gameInit();
    $("#start-container").show();

    console.log("in the website ready function");

    $("#start-button").on("click", function () {
        //set up intial game screen - explain the rules
        // Hide start button
        // Show first question and start the timer
        $("#start-container").hide();
        $("#results-container").hide();

        $("#questions-container").show();
        $("#questions-and-answers").show();

        nextQuestion();
        gameTimer = setInterval(checkIfQuestionTimeIsExpired, 1000);

    });

    // When a a question is posted - 3 possible events
    //     1) Question is given that is correct
    //     2) Question is given that is incorrect
    //     3) The timer runs out and is counted as wrong

    // after each possible outcome
    //      - Current currentQuestion++
    //      - Check if currentQuestion == 20
    //          - end the game and show how many the person got wrong/right/timout   
    //      - change Q to next Q


    $(".answers").on("click", function () {

        // user selects the answer
        // check to see if the answer is correct
        // 
        console.log($(this).val());

        //stop the timer
        clearInterval(gameTimer);

        //switch on the value of the button clicked to see if the user 
        //got the correct answer
        switch ($(this).val()) {

            case "1":
                answer = 0;
                break;

            case "2":
                answer = 1;
                break;

            case "3":
                answer = 2;
                break;

            case "4":
                answer = 3;
                break;
        }

        console.log("the answer selected was: " + answer);
        console.log(questionsObj["Q" + currentQuestion].correctAnswer);

        showAnswer();

        answerTimer = setInterval(checkIfAnswerTimeIsExpired, 1000);


    });

    // When a character selection for the opponent from middle row is made...
    //     - hide opponent selected - slide not-selected ones to the left
    //     - show the selected one at the bottom

    $("#restart-button").on("click", function () {
        console.log("reset on click handler function");

        //reset the game
        gameInit();
        $("#results-container").hide();
        
        $("#start-container").show();
        //reset gameTimer
        gameTimerCounter = 25;

        //index of currentQuestion in Obj
        numberCorrect = 0;
        numberWrong = 0;
        numberTimeouts = 0;

        // reset all user answers in objects to false
        // tabulate the results
        for (i = 0; i < currentQuestion; i++) {
            questionsObj["Q" + i].userAnswer = true;
        }

        //reset current question to 0 - aka the beginning
        currentQuestion = 0;

    });


});