
'use strict';

const input = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const answerElement = document.querySelector('.number');
const highScoreElement = document.querySelector('.highscore');
const minInput = 1;
const maxInput = 20;
var score = 20;
var highScore = 0;
var answer = getCurrentAnswer();

input.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		runGame();
	}
})

checkButton.onclick = runGame;

function runGame() {
	var isValid = validateGuess(input.value);
	console.log(isValid);
	if (!isValid) {
		input.classList.add('shake');
		message.innerText = 'Gotta be between 1 and 20!';
	} else {
		console.log('is valid input');
		if (answer == input.value) {
			message.innerText = 'You guessed correct';
			updateAnswer();
			updateHighScore();
			document.body.classList.add("success");
			input.disabled = true;
			checkButton.disabled = true;
		} else if (answer < input.value) {
			message.innerText = 'Too high!';
			updateScore(-1);
		} else {
			message.innerText = 'Too low';
			updateScore(-1);
		}
	}

}

function reset() {
	document.body.classList.remove("success");
	input.disabled = false;
	checkButton.disabled = false;
	input.value = '';
	message.innerText = 'Start guessing...';
	answer = '?';
	score = 20;
	updateScore(0);
	updateAnswer();
	answer = getCurrentAnswer();
}

function updateHighScore() {
	highScore = score > highScore ? score : highScore;
	highScoreElement.innerText = highScore;
}

function getCurrentAnswer() {
	const result = Math.round(Math.random() * (maxInput - minInput) + minInput);
	console.log(result);
	return result;
}

function updateAnswer() {
	answerElement.innerText = answer;
}

function updateScore(update) {
	scoreElement.innerText = score + update;
}

input.addEventListener('animationend', () => {
	input.classList.remove('shake');
});

function validateGuess(input) {
	const num = Number(input);
	return !isNaN(num) && num >= minInput && num <= maxInput;
}
