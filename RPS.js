let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

updatescore();

/*function*/
function playGame(playerMove) {
    const ComputerGuess = PickComputerMove();
    let result = '';

    if (playerMove === 'Scissors') {
        if (ComputerGuess === 'Rock') {
            result = "You Lose";
        }
        else if (ComputerGuess === 'Paper') {
            result = "You Win";
        }
        else if (ComputerGuess === 'Scissors') {
            result = "Tie";
        }
    }
    else if (playerMove === 'Paper') {
        if (ComputerGuess === 'Rock') {
            result = "You Win";
        }
        else if (ComputerGuess === 'Paper') {
            result = "Tie";
        }
        else if (ComputerGuess === 'Scissors') {
            result = "You Lose";
        }
    }
    else if (playerMove === 'Rock') {
        if (ComputerGuess === 'Rock') {
            result = "Tie";
        }
        else if (ComputerGuess === 'Paper') {
            result = "You Lose";
        }
        else if (ComputerGuess === 'Scissors') {
            result = "You Win";
        }
    }

    if (result === 'You Win') {
        //score.wins =score.wins+1;
        score.wins += 1;
    }
    else if (result === 'You Lose') {
        //score.looses =score.losses+1;
        score.losses += 1;
    }
    else if (result === 'Tie') {
        //score.ties =score.ties+1;
        score.ties += 1;
    }


    localStorage.setItem("score", JSON.stringify(score));
    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(".js-moves").innerHTML = ` You picked <img class="move-icon" src="images/${playerMove.toLowerCase()}-emoji.png" alt="${playerMove}"> 
        Computer picked <img class="move-icon" src="images/${ComputerGuess.toLowerCase()}-emoji.png" alt="${ComputerGuess}">`;
    updatescore();


}

function updatescore() {
    document.querySelector(".js-score").innerHTML = `wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`;
}

function PickComputerMove() {
    const randomnumber = Math.random();
    let ComputerGuess = '';
    if (randomnumber >= 0 && randomnumber < 1 / 3) {
        ComputerGuess = 'Rock';
    }
    else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
        ComputerGuess = 'Paper';
    }
    else if (randomnumber >= 2 / 3 && randomnumber < 1) {
        ComputerGuess = 'Scissors';
    }

    return ComputerGuess;
}

function playSound(type) {

    const sounds = {
        rock: new Audio("sound.mp3"),
        paper: new Audio("sound.mp3"),
        scissors: new Audio("sound.mp3")
    };

    sounds[type].currentTime = 0;
    sounds[type].play();
}