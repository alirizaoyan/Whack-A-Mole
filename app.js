const square = document.querySelectorAll(".square")
const mole = document.querySelectorAll(".mole")
const timeLeft = document.querySelector("#time-left")
let score = document.querySelector("#score")

let result = 0
let currentTime = parseInt(timeLeft.textContent)
let countDownID
let timerID

let checkMoleLocation = (event) => {
    if (event.target.id === hitElement) {
        result++
        score.textContent = result
    }
}

let moveMole = () => {
    square.forEach(element => {
        element.classList.remove("mole");
    });

    let moleElement = square[Math.floor(Math.random() * 9)]
    moleElement.classList.add("mole")
    hitElement = moleElement.id
}

square.forEach((element) => {
    element.addEventListener("mouseup", checkMoleLocation)
})

let countDown = () => {
    currentTime--
    timeLeft.textContent = String(currentTime)

    if (currentTime === 0) {
        square.forEach((element) => {
            element.removeEventListener("mouseup", checkMoleLocation)
        })

        clearInterval(timerID)
        clearInterval(countDownID)

        alert("Time's up! Your score is " + result)
    }
}

let startGame = () => {
    timerID = setInterval(moveMole, 1000)
    countDownID = setInterval(countDown, 1000)
}

startGame()