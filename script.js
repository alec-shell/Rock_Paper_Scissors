let userScore = 0;
let compScore = 0;
let roundsLeft = 3;

//randomly generate computer's move
function computerMove() {
    let moves = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return moves[index];
}

// pull user move submission and display results
function submitMove() {

    // if game is not over...
    if (roundsLeft > 0 && userScore !== 2 && compScore != 2) {
        let userMove = document.getElementById("moves").value;
        let compMove = computerMove();
        let result = "YOU LOSE";

        //set round result
        if (compMove === userMove) {
            result = "TIE";
        }
        else if (compMove === "rock" && userMove === "paper") {
            result = "YOU WIN";
        }
        else if (compMove === "paper" && userMove === "scissors") {
            result = "YOU WIN";
        }
        else if (compMove === "scissors" && userMove === "rock") {
            result = "YOU WIN";
        }

        //tabulate score and decrement round counter
        if (result === "YOU WIN") {
            userScore ++;
            roundsLeft --;
        }
        if (result === "YOU LOSE") {
            compScore ++;
            roundsLeft --;
        }

        document.getElementById("message").innerHTML = `THE COMPUTER CHOSE: ${compMove.toUpperCase()}`;
        document.getElementById("winner").innerHTML = result;
        document.getElementById("score").innerHTML = `YOU: ${userScore} COMPUTER: ${compScore}`;
        document.getElementById("remainingRounds").innerHTML = `ROUNDS LEFT: ${roundsLeft}`;

        //recursive call if game is over
        if (roundsLeft === 0 || userScore === 2 || compScore === 2) {
            submitMove();
        }
    }

    //if a player has won or score is zero, display alert, reset variables and page
    else {
        if (userScore > compScore) {
            alert("!!!!YOU WIN!!!!");
        }
        else {
            alert("!!!!YOU LOSE!!!!");
        }
        userScore = 0;
        compScore = 0;
        roundsLeft = 3;
        location.reload();
    }
}
