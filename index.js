document.querySelector(".img1").setAttribute("src", "images/dice6.png");
document.querySelector(".img2").setAttribute("src", "images/dice6.png");

function play() {
  var randNum1 = Math.floor(Math.random() * Math.floor(6)) + 1;
  var diceNum = "dice" + randNum1 + ".png";
  document.querySelector(".img1").setAttribute("src", "images/" + diceNum);

  var randNum2 = Math.floor(Math.random() * Math.floor(6)) + 1;
  diceNum = "dice" + randNum2 + ".png";
  document.querySelector(".img2").setAttribute("src", "images/" + diceNum);

  if (randNum1 > randNum2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
  } else if (randNum1 < randNum2) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerText = "Draw!";
  }
}

function start() {
  window.location.reload();
}

document.querySelector("h1").addEventListener("click", () => {
  play();
  window.setTimeout(start, 2000);
});
