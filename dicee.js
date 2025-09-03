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
  // move flag to correct side
  // update winner heading
}

function startDiceGame() {
  // start with a player 1 and player 2 dice set to 6

  // on refresh, roll the dice
  // window.addEventListener("beforeunload", (e) => {
  //   e.preventDefault();
  //   console.log("Prevented page from reloading");
  for (let i = 0; i < 10; i++) {
    rollDice();
  }
  //   return false;
  // });
}

startDiceGame();