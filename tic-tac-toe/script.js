//1 = blue 0 = red
let cells
let turn = 0
let turns = 0
let redWins = 0
let blueWins = 0
let board = [
    [4, 4, 4],
    [4, 4, 4],
    [4, 4, 4]
]

//Get elements when page is loaded
window.addEventListener('load', function () {
    let cells = document.querySelectorAll(".cell");

    cells.forEach( (cell) => {
        cell.addEventListener("click", () => {
            console.log("cell clicked")
            cellClicked(cell)  
        })
    })
});

function cellClicked(cell) {
    let row = (Math.floor(parseInt(cell.id) / 3))
    let col = (parseInt(cell.id) % 3)
    console.log(`row ${row} col ${col}`)
    board[row][col] = turn

    if (cell.classList.contains("occupied")) {
        console.log("cell occupied")
    }
    else {
        turns += 1
        cell.classList.add("occupied")
        if (turn == 1) {
            cell.classList.add("blue")
            console.log("blue")
            cell.insertAdjacentHTML(
            "afterbegin",
            `<span class="circle"></span>
            <span class="circle"></span>
            `)
        }
        else {
            cell.classList.add("red")
            console.log("red")
            cell.insertAdjacentHTML(
                "afterbegin",
                `<span class="cross"></span>
                <span class="cross"></span>
                `)
        }
        turn = Math.abs(turn - 1)
        checkBoard()
    }
}

function checkBoard() {
    //Checks for vertical and horizontal wins
    for(let i = 0; i < 3; i++) {
        if(board[i][0] + board[i][1] + board[i][2] == 3) {
            console.log("blue wins")
            win("Blue")
        }
        if(board[0][i] + board[1][i] + board[2][i] == 3) {
            console.log("blue wins")
            win("Blue")
        }

        if(board[i][0] + board[i][1] + board[i][2] == 0) {
            console.log("red wins")
            win("Red")
        }
        if(board[0][i] + board[1][i] + board[2][i] == 0) {
            console.log("red wins")
            win("Red")
        }
    }

    //Checks for diagonal wins
    if(board[0][0] + board[1][1] + board[2][2] == 3) {
        console.log("blue wins")
        win("Blue")
    }
    if(board[0][0] + board[1][1] + board[2][2] == 0) {
        console.log("red wins")
        win("Red")
    }

    if(board[0][2] + board[1][1] + board[2][0] == 3) {
        console.log("blue wins")
        win("Blue")
    }
    if(board[0][2] + board[1][1] + board[2][0] == 0) {
        console.log("red wins")
        win("Red")
    }
    if(turns == 9) {
        win("Tie")
    }
}

function clearBoard() {
    let cells = document.querySelectorAll(".cell");
    for(let i = 0; i < 9; i++) {
        cells[i].innerHTML = ""
        cells[i].classList.remove("red", "blue", "occupied")
    }
    board = [
        [4, 4, 4],
        [4, 4, 4],
        [4, 4, 4]
    ]
    turns = 0
}

async function win(winner) {
    clearBoard()
    winElement = document.querySelector(".win-container")
    gameElement = document.querySelector(".game-container")
    winnerElement = document.querySelector(".winner")
    scoreboardElement = document.querySelector(".score-container")
    scoreElement = document.querySelector(".score")
    
    if(winner == "Red") {
        winnerElement.classList.add("red-text")
        winnerElement.innerHTML = `${winner} Wins!`
        redWins += 1
    }
    else if(winner == "Blue") {
        winnerElement.classList.add("blue-text")
        winnerElement.innerHTML = `${winner} Wins!`
        blueWins += 1
    }
    else if(winner == "Tie") {
        winnerElement.classList.add("white-text")
        winnerElement.innerHTML = "Tie!"
    }

    winElement.classList.toggle("hide")
    gameElement.classList.toggle("low-opacity")
    await delay(3000)
    winElement.classList.toggle("hide")
    gameElement.classList.toggle("low-opacity")
    winnerElement.classList.remove("red-text", "blue-text", "white-text")
    scoreElement.innerHTML = `${redWins} - ${blueWins}`
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

