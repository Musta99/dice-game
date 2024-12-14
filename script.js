var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

var img1 = document.querySelector("#dice1");
var img2 = document.querySelector("#dice2");
var message = document.querySelector("#msg");

function changeImage1() {
  if (randomNum1 === 1) {
    img1.setAttribute("src", "./assets/dice1.png");
  } else if (randomNum1 === 2) {
    img1.setAttribute("src", "./assets/dice2.png");
  } else if (randomNum1 === 3) {
    img1.setAttribute("src", "./assets/dice3.png");
  } else if (randomNum1 === 4) {
    img1.setAttribute("src", "./assets/dice4.png");
  } else if (randomNum1 === 5) {
    img1.setAttribute("src", "./assets/dice5.png");
  } else {
    img1.setAttribute("src", "./assets/dice6.png");
  }
}

function changeImage2() {
  if (randomNum2 === 1) {
    img2.setAttribute("src", "./assets/dice1.png");
  } else if (randomNum2 === 2) {
    img2.setAttribute("src", "./assets/dice2.png");
  } else if (randomNum2 === 3) {
    img2.setAttribute("src", "./assets/dice3.png");
  } else if (randomNum2 === 4) {
    img2.setAttribute("src", "./assets/dice4.png");
  } else if (randomNum2 === 5) {
    img2.setAttribute("src", "./assets/dice5.png");
  } else {
    img2.setAttribute("src", "./assets/dice6.png");
  }
}

function changeImage() {
  changeImage1();
  changeImage2();

  if (randomNum1 > randomNum2) {
    message.textContent = "Player 1 wins";
  } else if (randomNum1 < randomNum2) {
    message.textContent = "Player 2 wins";
  } else {
    message.textContent = "Scores are tied!";
  }
}
