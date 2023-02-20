const cards = document.querySelectorAll(".card");
const clubs = document.querySelectorAll(".suitClubs");
const spades = document.querySelectorAll(".suitSpades");
const diamonds = document.querySelectorAll(".suitDiamonds");
const hearts = document.querySelectorAll(".suitHearts.innerhtml");
const timerDisplay = document.querySelector(".timer");
const triesLeft = document.querySelector(".tries").value;

let allCards = [clubs[0], clubs[1], spades[0], spades[1], diamonds[0], diamonds[1], hearts[0], hearts[1]];
let matched = 0;
// let triesLeft = 10;
// triesLeft = document.querySelector(".tries").value;
console.log(triesLeft);
// const timerDisplay = document.querySelector("#timer");
let timeLeft = 60;
console.log(timeLeft);
console.log(timerDisplay.innerHTML);

setInterval(() => {
  timeLeft--;
  timerDisplay.innerHTML = timeLeft;
  console.log(timerDisplay.innerHTML);
  console.log(timeLeft);
}, 1000);

// console.log(cards);

let hasFlippedCard = false;
let card1;
let card2;

function flip() {
  if (this === card1) return;
  this.classList.add("flip");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    card1 = this;
    console.log(hasFlippedCard, card1);
  } else {
    hasFlippedCard = false;
    card2 = this;
    console.log(hasFlippedCard, card1);
    match();
  }
}
function match() {
  if (card1.innerHTML === card2.innerHTML) {
    card1.removeEventListener("click", flip);
    card2.removeEventListener("click", flip);
    console.log("removed event listener to stop interaction");
    matched++;
    if (matched === cards.length / 2) {
      console.log("you won");
    }
  } else
    setTimeout(() => {
      card1.classList.remove("flip");
      card2.classList.remove("flip");
    }, 500);
  triesLeft -= 1;
  console.log(triesLeft);
  if (triesLeft === 0) {
    console.log("you lost");
  }
}

console.log(matched);

cards.forEach((e) => e.addEventListener("click", flip));

// if (cards.flip.length = 0)
// {console.log("youwon")}
