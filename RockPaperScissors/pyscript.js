// pyscript.js

function play() {
    const choices = ["rock", "paper", "scissors"];
    const playerChoice = document.getElementById("playerChoice").value.toLowerCase();
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = document.getElementById("result");

    if (!choices.includes(playerChoice)) {
        result.innerHTML = "Invalid choice! <br> Please choose Rock, Paper, or Scissors.";
        return;
    }

    if (playerChoice === computerChoice) {
        result.innerHTML = `Computer: ${computerChoice} <br> Player: ${playerChoice} <br> Tie...`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result.innerHTML = `Computer: ${computerChoice} <br> Player: ${playerChoice} <br> You Win :)`;
    } else {
        result.innerHTML = `Computer: ${computerChoice} <br> Player: ${playerChoice} <br> You Lose :(`;
    }
}
