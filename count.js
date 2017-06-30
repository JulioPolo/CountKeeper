/*jslint plusplus: true */
"use strict";
var player1button = document.getElementById("player1button");
var player2button = document.getElementById("player2button");
var resetbutton = document.getElementById("resetbutton");
var numplays = document.querySelector("#numplays");

var player1score = document.getElementById("Player1Score");
var player2score = document.getElementById("Player2Score");
//Variables internas
var p1Score = 0;
var p2Score = 0;
var plays = 5; //Number(numplays.getAttribute("value"));
var gameOver = false;
//Eventos
player1button.addEventListener("click", function () {
    p1Score++;
    if (!gameOver) {
        player1score.textContent = p1Score;
        if (p1Score === plays) {
            player1score.classList.add("winner");
            gameOver = true;
        }
    }
});
player2button.addEventListener("click", function () {
    p2Score++;
    if (!gameOver) {
        player2score.textContent = p2Score;
        if (p2Score === plays) {
            player2score.classList.add("winner");
            gameOver = true;
        }
    }
});

function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    player1score.textContent = p1Score;
    player2score.textContent = p2Score;
    player1score.classList.remove("winner");
    player2score.classList.remove("winner");
}

numplays.addEventListener("change", function () {
    plays = Number(numplays.value);
    reset();
});

resetbutton.addEventListener("click", function () {
    reset();
});
