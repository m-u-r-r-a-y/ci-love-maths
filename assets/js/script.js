


document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked the submit button!');
            } else {
                    let gameType = this.getAttribute('data-type');
                    alert(`you clicked ${gameType}!`)
            }

        })
    }
})

/**
 * the main game "loop" function, called when the script is loaded and after the users answer has been processed
 
 */
function runGame() {

// creates two random numbers between 1 and 25
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;
}

runGame();

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractionQuestion() {

}
function displayMultiplyQuestion() {

}