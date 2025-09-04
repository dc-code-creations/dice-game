function rollDice() {
  // generate 2 random numbers between 1 and 6
  let randomNum1 = Math.floor(Math.random() * 6) + 1;
  let randomNum2 = Math.floor(Math.random() * 6) + 1;
  console.log(randomNum1);
  console.log(randomNum2);

  // display new dice numbers
  let diceImg1 = `images/dice${randomNum1}.png`;
  let diceImg2 = `images/dice${randomNum2}.png`;

  console.log(diceImg1);
  console.log(diceImg2);

  document.querySelector(".player-one-dice").setAttribute("src", diceImg1);
  document.querySelector(".player-two-dice").setAttribute("src", diceImg2);

  // determine winner, and update heading accordingly
  let headingElement = document.querySelector("div.container h1");

  if (randomNum1 > randomNum2) {
    headingElement.textContent = "🚩 Player 1 Wins!";
    console.log("Player 1 Wins!");
  }
  else if (randomNum1 < randomNum2) {
    headingElement.textContent = "Player 2 Wins! 🚩";
    console.log("Player 2 Wins!");
  }
  else {
    headingElement.textContent = "Draw";
    console.log("Draw");
  }
}

function startDiceGame() {
  // start with a player 1 and player 2 dice set to 6
  document.addEventListener("click", (e) => {
    rollDice();
  });
}

startDiceGame();