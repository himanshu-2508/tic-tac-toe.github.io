const currentPlayer = document.querySelector(".currentPlayer");
const allBox = document.querySelectorAll(".box");
const newGameDiv = document.querySelector(".newGame");
const kaata = "X";
const zero = "O";

// Default Values
currentPlayer.innerText = "CURRENT PLAYER - X";
let currentVal = kaata;
let places = []
let winner = false;
// Winner Decision
const winningPlaces = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
]
allBox.forEach((element, index) => {
    element.addEventListener('click', () => {
        handleBoxes(index);
    })
});
function handleBoxes(boxNumber) {
    if (winner !== true) {
        if (allBox[boxNumber].innerText === "") {
            places[boxNumber] = currentVal;
            allBox[boxNumber].innerText = places[boxNumber];
            handlePlayer();
            gameOver();
        }
    }
}
function handlePlayer() {
    if (currentVal === kaata) {
        currentVal = zero;
        currentPlayer.innerText = "CURRENT PLAYER - O"
    }
    else {
        currentVal = kaata;
        currentPlayer.innerText = "CURRENT PLAYER - X"
    }
}
function gameOver() {
    if (places.length >= 3) {
        for (let i = 0; i < winningPlaces.length; i++) {
            if (places[winningPlaces[i][0]] === kaata && places[winningPlaces[i][1]] === kaata && places[winningPlaces[i][2]] === kaata) {
                currentPlayer.innerText = "Winner X";
                allBox[winningPlaces[i][0]].style.backgroundColor = "#00D000";
                allBox[winningPlaces[i][2]].style.backgroundColor = "#00D000";
                allBox[winningPlaces[i][1]].style.backgroundColor = "#00D000";
                newGameDiv.classList.add("active");
                winner = true;
                break;
            }
            else if (places[winningPlaces[i][0]] === zero && places[winningPlaces[i][1]] === zero && places[winningPlaces[i][2]] === zero) {
                currentPlayer.innerText = "WINNER - O";
                allBox[winningPlaces[i][0]].style.backgroundColor = "#00D000";
                allBox[winningPlaces[i][2]].style.backgroundColor = "#00D000";
                allBox[winningPlaces[i][1]].style.backgroundColor = "#00D000";
                newGameDiv.classList.add("active");
                winner = true;
                break;
            }
        }
    }
    if (places.length === 9) {
        console.log(places);
        let flag = false;
        if (places.includes(undefined)) {
            flag = true;
        }
        if (flag === false) {
            newGameDiv.classList.add("active");
            currentPlayer.innerText = "It's A Draw";
        }
    }

}
// Reset all to previous values
function reset() {
    currentPlayer.innerText = "CURRENT PLAYER - X";
    currentVal = kaata;
    places = []
    allBox.forEach(element => {
        element.innerText = "";
        element.style.backgroundColor = "";
    })
    winner = false;
    newGameDiv.classList.remove("active")
}