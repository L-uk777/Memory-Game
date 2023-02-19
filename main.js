const cards= document.querySelectorAll(".card")

// possibleCards=["♠","♠","♥","♥","♦","♦","♣","♣","10","10","J","J","Q","Q","K","K"]
console.log(cards)



function flip() {
   this.classList.toggle("flip")
   
}

cards.forEach((e => e.addEventListener("click", flip)))



