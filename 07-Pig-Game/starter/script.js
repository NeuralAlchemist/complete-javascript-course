'use strict';
const minDieValue = 1;
const maxDieValue = 6;
const initialPlayerCurrent = 0;
const initialPlayerScore = 0;

//Player class constants
const player1Class = "player--0";
const player2Class = "player--1";
const playerActiveClass = "player--active";

// Buttons
const rollDieButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");
const newGameButton = document.querySelector(".btn--new");

//Die
const dieImage = document.querySelector(".die");

//Players Components
const player1 = document.querySelector(".player--0")
const player2 = document.querySelector(".player--1")
const player1Current = document.getElementById("current--0");
const player2Current = document.getElementById("current--1");
const player1Score = document.getElementById("score--0");
const player2Score = document.getElementById("score--1");
const player1Name = document.getElementById("name--0");
const player2Name = document.getElementById("name--1");
var activePlayer = player1;


rollDieButton.onclick = rollDie
holdButton.onclick = hold
newGameButton.onclick = reset

function reset() {
    activePlayer = player1;
    player1Current.innerText = initialPlayerCurrent;
    player2Current.innerText = initialPlayerCurrent;
    player1Score.innerText = initialPlayerScore;
    player2Score.innerText = initialPlayerScore;
}

function hold() {
    console.log("hold");
    incrementScore();
    checkWinCondition();
    switchCurrentPlayer();
}

function checkWinCondition() {
    if (activePlayer === player1) {
        console.log("current player to check for win is player1");
        if (parseInt(player1Score.innerText) >= 100) {
            player1.classList.add("player--winner");
            player1Name.classList.add("player--winner");
        }
    } else {
        console.log("current player to check for win is player2");
        if (parseInt(player2Score.innerText) >= 100) {
            player2.classList.add("player--winner");
            player2Name.classList.add("player--winner");
        }
    }
}

function rollDie() {
    console.log("rolling die");
    var dieValue = Math.round(Math.random() * (maxDieValue - minDieValue) + minDieValue);
    console.log(dieValue);
    if (dieValue === 1) {
        switchCurrentPlayer();
    } else {
        incrementCurrent(dieValue);
    }
    dieImage.src = `die-${dieValue}.png`
    console.log(dieImage.source);
}

function incrementCurrent(dieValue) {
    if (activePlayer === player1) {
        player1Current.innerText = Number(player1Current.innerText) + dieValue;
    } else {
        player2Current.innerText = Number(player2Current.innerText) + dieValue;
    }
}

function incrementScore() {
    if (activePlayer === player1) {
        player1Score.innerText = Number(player1Score.innerText) + Number(player1Current.innerText);
    }
    else {
        player2Score.innerText = Number(player2Score.innerText) + Number(player2Current.innerText);
    }
}

function switchCurrentPlayer() {
    console.log(activePlayer.classList.contains(player1Class));
    if (activePlayer.classList.contains(player1Class)) {
        player1Current.innerText = 0;
        player1.classList.remove(playerActiveClass);
        player2.classList.add(playerActiveClass);
        activePlayer = player2;
    } else {
        player2Current.innerText = 0;
        player2.classList.remove(playerActiveClass);
        player1.classList.add(playerActiveClass);
        activePlayer = player1;
    }
}
