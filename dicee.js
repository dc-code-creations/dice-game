function rollDice() {
  // generate 2 random numbers between 1 and 6
  let dice1 = Math.floor(Math.random() * 6) + 1;
  console.log(dice1);
  // display new dice numbers
  // move flag to correct side
  // update winner heading
}

function startDiceGame() {
  // start with a player 1 and player 2 dice set to 6

  // on refresh, roll the dice
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    console.log("Prevented page from reloading");
    rollDice();
  });
}

startDiceGame();