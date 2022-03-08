const ITEMS = ['rock', 'paper', 'scissor']

function computerPlay() {
    computerPick = ITEMS[Math.floor(Math.random() * ITEMS.length)]

    computerItems.forEach(function(item){
        // First remove item-active styles every item.
        item.classList.remove('item-active');

        // Apply style to item that was picked. 
        if (item.classList.contains(computerPick)) {
            item.classList.add('item-active');
        }
    });
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        roundResult.innerText = `round draw!`;
        return;
    }

    if ((playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper")) {

        playerPoint++;
        playerScore.innerText = playerPoint;
        roundResult.innerText = `you win!\n ${playerSelection}\n beats\n ${computerSelection}`;
        
    } else {
        computerPoint++;
        computerScore.innerText = computerPoint; 
        roundResult.innerText = `you lose!\n ${computerSelection}\n beats\n ${playerSelection}`;
    }

    if (playerPoint == 5) {
        roundResult.innerText = `you win. congratulations!`;
        stopGame();
    } else if (computerPoint == 5) {
        roundResult.innerText = `game over. you lose!`;
        stopGame();
    }
    
}

function stopGame() {
    // Hide the items container when the game is over.
    const items = document.querySelectorAll('.items')
    items.forEach(function(item){
        item.style.visibility = 'hidden'
    });

    // Display reset game button.
    const reset = document.querySelector('.reset')
    reset.style.visibility = 'visible'

    reset.addEventListener('click', function(){
        // Reset the game like the window is refreshed.
        location.reload()
    });
}

function game() {
    playerItems.forEach(function(item){
        item.addEventListener('click', function(e){
            // This part is done to remove style for other items 'NOT CLICKED'
            playerItems.forEach(a => {
                a.classList.remove('item-active');
            });
            
            playerPick = e.currentTarget.classList[2];
            // This is to add style for item that is 'CLICKED'
            e.currentTarget.classList.add('item-active'); 
    
            computerPlay();
    
            playRound(playerPick, computerPick);
        });
    })
}


let playerPick;
let computerPick;
let playerPoint = 0;
let computerPoint = 0;
let roundResult = document.querySelector('.card-2');
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');

const playerItems = document.querySelectorAll('.player-items');
const computerItems = document.querySelectorAll('.computer-items');

game()
