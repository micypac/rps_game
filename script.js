const ITEMS = ['rock', 'paper', 'scissor']

function computerPlay() {
    return ITEMS[Math.floor(Math.random() * ITEMS.length)]
}

function playerPlay() {
    let pick;

    while (true) {
        pick = prompt("Enter 'rock', 'paper', 'scissor': ", "")
        if (!pick) {
            continue
        } else {
            if (ITEMS.includes(pick.toLowerCase())) {
                break;
            } else {
                console.log(`Only pick any of the 3 options!`)
            }
        }
    }

    return pick.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `Game draw! You both played ${playerSelection}`
    }

    if ((playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper")) {

        return `You win! ${playerSelection} beats ${computerSelection}`
        
    } 
    
    return `You lose! ${computerSelection} beats ${playerSelection}`
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerPick = playerPlay()
        computerPick = computerPlay()  

        let roundMsg = playRound(playerPick, computerPick)

        // console.log(`player: ${playerPick}; computer: ${computerPick}`)
        console.log(roundMsg)
        if (roundMsg.includes('win')) {
            playerWins++
        } else if (roundMsg.includes('lose')) {
            computerWins++
        }
    }
}

function displayWinner() {
    if (playerWins == computerWins) {
        return `Game Draw!`
    } else if (playerWins > computerWins) {
        return `You win! You're the best!`
    } else {
        return `You lose! Go home, you're drunk!`
    }
}

let playerPick;
let computerPick;
let playerWins = 0
let computerWins = 0

game()
console.log(displayWinner())