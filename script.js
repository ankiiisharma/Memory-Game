const cardsE1 = document.querySelector(".cards");
const cards = [];

for(let i=0;i<8;i++){
    let el = document.createElement("div");
    el.classList.add("card");
    cards.push(el);
}

for(let c of cards){
    cardsE1.append(c);
}