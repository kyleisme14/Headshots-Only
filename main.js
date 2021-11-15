let squares = document.querySelectorAll(".square")
const mole = document.querySelectorAll(".mole")
let squares1 = document.querySelectorAll(".square1")
const mole1 = document.querySelectorAll(".mole1")
let squares2 = document.querySelectorAll(".square2")
const mole2 = document.querySelectorAll(".mole2")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")
let timerId = null
let result = 0
let hitPosition
let hitPosition1
let hitPosition2
let currentTime = 30
let startButton = document.getElementById("myDiv");
let startPage = document.getElementById("startPage");
let restartPage = document.getElementById("restartPage");



// first set
function randomSquare() {         // creating a whack a mole situation
    squares.forEach(square => { //for each square in squares
        square.classList.remove('mole') // remove mole from class name
        square.classList.add('hole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 4)] // randomly select square 

    randomSquare.classList.add("mole") // add mole to class  
    randomSquare.classList.remove('hole')
    hitPosition = randomSquare.id  // var = the mole location
}
// 
//second set
function randomSquare1() {         // creating a whack a mole situation for bottom line
    squares1.forEach(square1 => { //for each square in squares1
        square1.classList.remove('mole') // remove mole from class name
        square1.classList.add('hole')
    })

    let randomSquare1 = squares1[Math.floor(Math.random() * 3)] // randomly select square with math
    // console.log(randomSquare1)
    randomSquare1.classList.add("mole") // add mole to class
    randomSquare1.classList.remove("hole")

    hitPosition1 = randomSquare1.id  // var = the mole location
}
// third set
function randomSquare2() {         // creating a whack a mole situation for bottom line
    squares2.forEach(square1 => { //for each square in squares1
        square1.classList.remove('mole') // remove mole from class name
        square1.classList.add('hole')
    })

    let randomSquare2 = squares2[Math.floor(Math.random() * 2)] // randomly select square with math
    // console.log(randomSquare1)
    randomSquare2.classList.add("mole") // add mole to class
    randomSquare2.classList.remove("hole")

    hitPosition2 = randomSquare2.id  // var = the mole location
}


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
squares2.forEach(square2 => {
    square2.addEventListener('mousedown', function (){
        if (square2.id == hitPosition2) {
            result++
            score.textContent = result
            hitPosition2 = null
            randomSquare2()
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
        clearInterval(countDownTimerId) //clear the timer
        clearInterval(timerId)
        // change the page to score/restart
        startButton.style.display = "none";
        restartPage.style.display = "block";
        document.querySelector(".endScore").textContent = ("Game Over! Your final score is " + result);
    }
}


let countDownTimerId;


// /// hide and reveal start?
function myFunction() {
    startPage.style.display = "none";
    restartPage.style.display = "none";
    startButton.style.display = "block";
        // console.log('playing')
        let currentTime = 30;
        countDownTierId = setInterval(countDown, 1000)

    //start game
    randomSquare();
    // setTimeout function to delay pop up
    setTimeout(() => {randomSquare()}, 10000);
    setTimeout(() => {randomSquare()}, 15000);
    setTimeout(() => {randomSquare()}, 25000);
    setTimeout(() => {randomSquare()}, 26000);
    setTimeout(() => {randomSquare()}, 27000);
    setTimeout(() => {randomSquare1()}, 5000);
    setTimeout(() => {randomSquare1()}, 15000);
    setTimeout(() => {randomSquare1()}, 25000);
    setTimeout(() => {randomSquare2()}, 10010);
    setTimeout(() => {randomSquare2()}, 12010);
    setTimeout(() => {randomSquare2()}, 15000);
    setTimeout(() => {randomSquare2()}, 25000);
    setTimeout(() => {randomSquare2()}, 28000);
  } 


