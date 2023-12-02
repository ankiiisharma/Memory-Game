const cardsE1 = document.querySelector(".cards");
const cards = [];
const imgs = ["batman", "hnm", "LV", "starbucks"];

for (let i = 0; i < 8; i++) {
    let el = document.createElement("div");
    el.classList.add("card");
    // Check the path to the images and ensure it is correct
    el.innerHTML = `<img src="./images/${imgs[i % 4]}.png" alt="${imgs[i % 4]}"/>`;
    cards.push(el);
}

for (let c of cards) {
    cardsE1.append(c);
}
