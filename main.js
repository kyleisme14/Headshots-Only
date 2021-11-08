const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0

function randomSquare(){         // creating a whack a mole situation
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random()* 9)]
    randomSquare.classList.add("mole");
}

// adding functionality for clicking on 'mole'
squares.forEach(id => {
    square.addEventListener('mousedown' () => {
        if (square.id == )
    }
    )
})

// function for the 'mole' to move
function moveMole(){
    let timerId = null;
    timerId  = setInterval(randomSquare, 500);

}

moveMole()