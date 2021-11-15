# Ghost-Fighter
(originally called Headshots-Only)

An in-browser FPS game


Instructions: 
Click on the ghosts to make the dissapear and score points!  

Motivation:
This game is a code bootcamp practice excersize to complete Unit-1. I was able to apply many of the new skills I've learned including html, css, javascript. I was able to create start buttons, keep time and score and have fun! I feel much more comfortable with github and developing ideas.  


The Initial Idea:

I wanted to make a point and click shooter game that would be fun to blow off some steam. The original plan was to recreate a shooting gallery within a grid. 

WireFrame:
The original version of the game would look like this.

![Screen Shot 2021-11-08 at 10 34 46 AM](https://user-images.githubusercontent.com/27470736/140798510-23ff8f44-8a1a-464d-ab00-58f2a6dc092b.png)

But first we built a simple whack-a-mole.

wireframe:
![Screen Shot 2021-11-08 at 10 34 50 AM](https://user-images.githubusercontent.com/27470736/140798567-5e97740d-5197-49b3-9977-63e5a95306d3.png)

The actual mole execution:
![Screen Shot 2021-11-10 at 1 19 23 PM](https://user-images.githubusercontent.com/27470736/141195612-06f035ca-0468-4d82-82be-fddeeca9e1d7.png)


The ghost idea came when I was thinking about what would be fun to 'fight' without being violent or offensive. 

Phase 2: 
I'd like to make multiple levels to this game with increased difficulty. Add more locations. I'd also like to keep track of highscore. 

Some more aesthetic considerations: I'd like to include other enemies. Maybe a player character with a gun/device that flashes or makes a sound. 


Main functions:
```
moving the ghosts around
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
registering the click
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

timer and score
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
```


Classes: 
Grid and Squares
```
.grid {
    width: 80%;
    height: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    grid-gap: 4%;
    align-items: center;
    }
.square {
    height: 250px;
    width: 30%;
   margin-bottom: 1%;
   border: dotted grey 1px;
}
```


Start Button
```
#startBtn {
    border: none;
    background: none;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
  }
```