function generateRandomChoice(){
    const randomNum = Math.floor(Math.random() * 3)
    let choices = ["rock", "paper", "scissors"]
    return choices[randomNum]
}

console.log(generateRandomChoice())

function play(choice) {
    computerChoice = generateRandomChoice()
    console.log("The computer chose", computerChoice)

    if (choice === "Scissors"){
        if (computerChoice === "Rock") {
            console.log("You lost")
        } else if (computerChoice === "Paper") {
            console.log("You won")
        } else {
            console.log("You tied")
        }
    }

    if (choice === "Rock"){
        if (computerChoice === "Paper") {
            console.log("You lost")
        } else if (computerChoice === "scissors") {
            console.log("You won")
        } else {
            console.log("You tied")
        }
    }

    if (choice === "Paper"){
        if (computerChoice === "scissors") {
            console.log("You lost")
        } else if (computerChoice === "Rock") {
            console.log("You won")
        } else {
            console.log("You tied")
        }
    }
}

play("Rock")