const square = document.querySelectorAll(".square")
const mole = document.querySelectorAll(".mole")
const timeLeft = document.querySelector("#time-left")
let score = document.querySelector("#score")

let result = 0
let currentTime = timeLeft.textContent

let moveMole = () => {
    square.forEach(element => {
        element.classList.remove("mole");
    });

    let moleElement = square[Math.floor(Math.random() * 9)]
    moleElement.classList.add("mole")
    hitElement = moleElement.id
}

square.forEach((element) => {
    element.addEventListener("mouseup", () => {
        if (element.id === hitElement) {
            result++
            score.textContent = result
        }
    })
})

let startGame = () => {
    let timerID = null
    timerID = setInterval(moveMole, 1000)
}

startGame()

