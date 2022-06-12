//token to keep track of player turn 
//change turn by switching value of token
let playerTurn = true
//keep track of turns to end game in tie
let turns = 0
//keep track of win state
//0 is no winner, 1 = player 1 wins, 2 = player 2 wins
let win = 0
//define color for reset
const unclaimedColor = `rgb(255, 0, 0)`
//define player one blue
const player1Color = `rgb(0, 0, 255)`
//define player 2 color green
const player2Color = `rgb(0, 255, 0)`
const gameOverColor = `rgb(0,0,0)`
//define win counter for each player
let player1Wins = 0
let player2Wins = 0

//grabbing each cell
const cell1 = document.querySelector('#a1')
const cell2 = document.querySelector('#a2')
const cell3 = document.querySelector('#a3')
const cell4 = document.querySelector('#b1')
const cell5 = document.querySelector('#b2')
const cell6 = document.querySelector('#b3')
const cell7 = document.querySelector('#c1')
const cell8 = document.querySelector('#c2')
const cell9 = document.querySelector('#c3')
//use array for looping to cut down on lines of code
const cellArray = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9]

//grabbing each row
const row1 = document.querySelector('#row1')
const row2 = document.querySelector('#row2')
const row3 = document.querySelector('#row3')

//grabbing button
const resetButton = document.querySelector('#reset')

//grabbing h2 to display turn and winner
const h2 = document.querySelector('h2')

//grab h3 to show wins
const h3 = document.querySelector('h3')

h3.innerHTML = "Player 1: " + player1Wins + " | Player 2: " + player2Wins

//function for checking winstate
//function could return a value of either 0,1, or 2.
const gameWon = () => {

    if (((cell1.style.backgroundColor == cell2.style.backgroundColor) && (cell2.style.backgroundColor == cell3.style.backgroundColor) && (cell1.style.backgroundColor == player1Color))) {
        return 1
    } else if (((cell1.style.backgroundColor == cell2.style.backgroundColor) && (cell2.style.backgroundColor == cell3.style.backgroundColor) && (cell1.style.backgroundColor == player2Color))) {
        return 2
    } else if (((cell4.style.backgroundColor == cell5.style.backgroundColor) && (cell5.style.backgroundColor == cell6.style.backgroundColor) && (cell4.style.backgroundColor == player1Color))) {
        return 1
    } else if (((cell4.style.backgroundColor == cell5.style.backgroundColor) && (cell5.style.backgroundColor == cell6.style.backgroundColor) && (cell4.style.backgroundColor == player2Color))) {
        return 2
    } else if (((cell7.style.backgroundColor == cell8.style.backgroundColor) && (cell8.style.backgroundColor == cell9.style.backgroundColor) && (cell7.style.backgroundColor == player1Color))) {
        return 1
    } else if (((cell7.style.backgroundColor == cell8.style.backgroundColor) && (cell8.style.backgroundColor == cell9.style.backgroundColor) && (cell7.style.backgroundColor == player2Color))) {
        return 2
    } else if (((cell1.style.backgroundColor == cell4.style.backgroundColor) && (cell4.style.backgroundColor == cell7.style.backgroundColor) && (cell1.style.backgroundColor == player1Color))) {
        return 1
    } else if (((cell1.style.backgroundColor == cell4.style.backgroundColor) && (cell4.style.backgroundColor == cell7.style.backgroundColor) && (cell1.style.backgroundColor == player2Color))) {
        return 2
    } else if (((cell2.style.backgroundColor == cell5.style.backgroundColor) && (cell5.style.backgroundColor == cell8.style.backgroundColor) && (cell2.style.backgroundColor == player1Color))) {
        return 1
    } else if (((cell2.style.backgroundColor == cell5.style.backgroundColor) && (cell5.style.backgroundColor == cell8.style.backgroundColor) && (cell2.style.backgroundColor == player2Color))) {
        return 2
    } else if (((cell3.style.backgroundColor == cell6.style.backgroundColor) && (cell6.style.backgroundColor == cell9.style.backgroundColor) && (cell3.style.backgroundColor == player1Color))) {
        return 1
    } else if (((cell3.style.backgroundColor == cell6.style.backgroundColor) && (cell6.style.backgroundColor == cell9.style.backgroundColor) && (cell3.style.backgroundColor == player2Color))) {
        return 2
    } else if (((cell1.style.backgroundColor == cell5.style.backgroundColor) && (cell5.style.backgroundColor == cell9.style.backgroundColor) && (cell1.style.backgroundColor == player1Color))) {
        return 1
    } else if (((cell1.style.backgroundColor == cell5.style.backgroundColor) && (cell5.style.backgroundColor == cell9.style.backgroundColor) && (cell1.style.backgroundColor == player2Color))) {
        return 2
    } else if (((cell3.style.backgroundColor == cell5.style.backgroundColor) && (cell5.style.backgroundColor == cell7.style.backgroundColor) && (cell3.style.backgroundColor == player1Color))) {
        return 1
    } else if (((cell3.style.backgroundColor == cell5.style.backgroundColor) && (cell5.style.backgroundColor == cell7.style.backgroundColor) && (cell3.style.backgroundColor == player2Color))) {
        return 2
    }
}

// //function for checking tied gamestate
// const tiedGame = () => {
//     //check for tied game by turns counter
//     if (turns > 9) {
//         h2.innerText = "Game Tied! Reset to play again!"
//     }
//
// }
//function to make cells black after someone wins
const makeBlack = () => {
    // console.log(cellArray)
    // for (i = 1; i < 10; i++) {
    //     if (cellAray[i].style.backgroundColor == unclaimedColor) {
    //         cellArray[i].style.backgroundColor = gameOverColor
    //     }
    // }

    if (cell1.style.backgroundColor == unclaimedColor) {
        cell1.style.backgroundColor = gameOverColor
    } if (cell2.style.backgroundColor == unclaimedColor) {
        cell2.style.backgroundColor = gameOverColor
    } if (cell3.style.backgroundColor == unclaimedColor) {
        cell3.style.backgroundColor = gameOverColor
    } if (cell4.style.backgroundColor == unclaimedColor) {
        cell4.style.backgroundColor = gameOverColor
    } if (cell5.style.backgroundColor == unclaimedColor) {
        cell5.style.backgroundColor = gameOverColor
    } if (cell6.style.backgroundColor == unclaimedColor) {
        cell6.style.backgroundColor = gameOverColor
    } if (cell7.style.backgroundColor == unclaimedColor) {
        cell7.style.backgroundColor = gameOverColor
    } if (cell8.style.backgroundColor == unclaimedColor) {
        cell8.style.backgroundColor = gameOverColor
    } if (cell9.style.backgroundColor == unclaimedColor) {
        cell9.style.backgroundColor = gameOverColor
    }
}



//function for clicking div
const markCell = () => { //maybe add parameter to pass in the current turn automatically
    //everything is in if statement if cell is red
    if (event.target.style.backgroundColor == unclaimedColor) {
        //change color of cell
        if (playerTurn === true) {
            event.target.style.backgroundColor = player1Color
        } else {
            event.target.style.backgroundColor = player2Color
        }

        //change turn to other player
        playerTurn = !playerTurn
        //increase turn counter
        turns = turns + 1
        //change player turn in h2
        if (playerTurn === true) {
            document.querySelector('h2').innerText = "Your turn Player 1"
        } else {
            document.querySelector('h2').innerText = "Your turn Player 2"
        }
        //check for win state
        win = gameWon()
        console.log(win)
        console.log(gameWon())

        if (win === 1) {
            document.querySelector('h2').innerText = "Player 1 Wins!"
            //change unclaimed cells to black
            makeBlack()
            //tick up score counter
            player1Wins = player1Wins + 1
            h3.innerHTML = "Player 1: " + player1Wins + " | Player 2: " + player2Wins

        }
        if (win === 2) {
            document.querySelector('h2').innerText = "Player 2 Wins!"
            //change unclaimed cells to black
            makeBlack()
            //tick up score counter
            player2Wins = player2Wins + 1
            h3.innerHTML = "Player 1: " + player1Wins + " | Player 2: " + player2Wins
        }
        //check for tied gamestate
        if (turns === 9 && win === 0) {
            h2.innerText = "Game Tied! Reset to play again!"

        } console.log(turns)
        console.log(playerTurn)
    }
}

//give each cell a click event listener
// for (i = 1; i < 10; i++) {
//     cellArray[i].addEventListener('click', markCell)
// }

cell1.addEventListener('click', markCell)
cell2.addEventListener('click', markCell)
cell3.addEventListener('click', markCell)
cell4.addEventListener('click', markCell)
cell5.addEventListener('click', markCell)
cell6.addEventListener('click', markCell)
cell7.addEventListener('click', markCell)
cell8.addEventListener('click', markCell)
cell9.addEventListener('click', markCell)

//function to reset gameboard
//also needs to reset turns = 0
const resetBoard = () => {
    //reset color of gameboard
    // for (i = 1; i < 10; i++) {
    //     cellArray[i].style.backgroundColor = unclaimedColor
    // }
    cell1.style.backgroundColor = unclaimedColor
    cell2.style.backgroundColor = unclaimedColor
    cell3.style.backgroundColor = unclaimedColor
    cell4.style.backgroundColor = unclaimedColor
    cell5.style.backgroundColor = unclaimedColor
    cell6.style.backgroundColor = unclaimedColor
    cell7.style.backgroundColor = unclaimedColor
    cell8.style.backgroundColor = unclaimedColor
    cell9.style.backgroundColor = unclaimedColor
    //reset h2
    h2.innerText = "Your Turn Player 1"
    //reset turns counter
    turns = 0
    //reset player turn
    playerTurn = true
}

//add reset to reset button
resetButton.addEventListener('click', resetBoard)


//check for game condition
//if turns = 10 then end game and declare tie

//create the gameboard on load or reset
document.addEventListener('DOMContentLoaded', resetBoard)

console.log(turns)
console.log(playerTurn)