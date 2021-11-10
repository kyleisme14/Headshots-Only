let squares = document.querySelectorAll(".square")
const mole = document.querySelectorAll(".mole")
let squares1 = document.querySelectorAll(".square1")
const mole1 = document.querySelectorAll(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")
let timerId = null
let result = 0
let hitPosition
let hitPosition1
let currentTime = 60

// top row
function randomSquare() {         // creating a whack a mole situation
    squares.forEach(square => { //for each square in squares
        square.classList.remove('mole') // remove mole from class name
        square.classList.add('hole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 3)] // randomly select square with math
    console.log(randomSquare)
  
    randomSquare.classList.add("mole") // add mole to class
    randomSquare.classList.remove('hole')
    hitPosition = randomSquare.id  // var = the mole location
}
//bottom row
function randomSquare1() {         // creating a whack a mole situation for bottom line
    squares1.forEach(square1 => { //for each square in squares1
        square1.classList.remove('mole') // remove mole from class name
        square1.classList.add('hole')
    })

    let randomSquare1 = squares1[Math.floor(Math.random() * 3)] // randomly select square with math
    console.log(randomSquare1)
    randomSquare1.classList.add("mole") // add mole to class
    randomSquare1.classList.remove("hole")

    hitPosition1 = randomSquare1.id  // var = the mole location
}

//start game
randomSquare();
randomSquare1();



// adding functionality for clicking on 'mole'
squares.forEach(square => {
    square.addEventListener('mousedown', function (){
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
            randomSquare()

        }
    })
})

squares1.forEach(square1 => {
    square1.addEventListener('mousedown', function (){
        if (square1.id == hitPosition1) {
            result++
            score.textContent = result
            hitPosition1 = null
            randomSquare1()

        }
    })
})

// // function for the 'mole' to move
// function moveMole(){
//      timerId  = setInterval(randomSquare, 1000);

// }

// moveMole()

function countDown(){
    currentTime-- // subtract -- from currentTime
    timeLeft.textContent = currentTime // in time-left on html print currentTime

    if (currentTime == 0){ // when game ends
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("Game Over! Your final score is" + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)


//////////xxxxxxx
//make the mole a celeb