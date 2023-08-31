const buttons = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const playerScoreDisplay = document.querySelector("#player");
const computerScoreDisplay = document.querySelector("#computer");
const choices = ["Камінь", "Ножиці", "Папір"];

let playerScore = 0;
let computerScore = 0;

function getResult(player, computer) {
  if (player === computer) {
    return "Нічия!";
  } else if (
    (player === "Камінь" && computer === "Ножиці") ||
    (player === "Папір" && computer === "Камінь") ||
    (player === "Ножиці" && computer === "Папір")
  ) {
    return "Ви вийграли раунд!";
  } else {
    return "Комп вийграв раунд!";
  }
}

buttons.forEach(button => button.addEventListener("click", () => {
    const playerChoice = button.textContent;
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    const roundResult = getResult(playerChoice, compChoice);
    if (roundResult.includes("Ви вийграли")) playerScore++;
    else if (roundResult.includes("Комп вийграв")) computerScore++;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    result.textContent = `Ви вибрали ${playerChoice}, комп вибрав ${compChoice}. ${roundResult}`;
  }));

