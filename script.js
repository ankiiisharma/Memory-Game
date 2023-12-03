const cardsE1 = document.querySelector(".cards");
const cards = [];
const imgs = ["batman", "hnm", "LV", "starbucks"];

for (let i = 0; i < 8; i++) {
    let el = document.createElement("div");
    el.classList.add("card");
    el.innerHTML = `<img class ="hide" src="./images/${imgs[i % 4]}.png" alt="${imgs[i % 4]}"/>`;
    cards.push(el);
}

cards.sort(()=>{
    return Math.random() - 0.5;
});

for (let c of cards) {
    cardsE1.append(c);
}

let IsFirstcardFliped = null;
let IsSecondcardFliped = null;

for (let c of cards) {
    c.addEventListener("click",async()=>{
        if(IsFirstcardFliped==null && IsSecondcardFliped==null){
            c.children[0].classList.remove("hide");
            IsFirstcardFliped=c;
        }
        else if(IsFirstcardFliped && IsSecondcardFliped==null){
            c.children[0].classList.remove("hide");
            IsSecondcardFliped = c;
        }
        if(IsFirstcardFliped.children[0].src !== IsSecondcardFliped.children[0].src){
            await new Promise((r)=>setTimeout (r,700));
            IsFirstcardFliped.children[0].classList.add("hide");
            IsSecondcardFliped.children[0].classList.add("hide");
        }
        else{
            let IsWin = checkWin();
            if(IsWin){
                window.location.href = "win.html";
            }
        }
        IsFirstcardFliped = null;
        IsSecondcardFliped = null;
    });
}

const checkWin = ()=>{
    for(let c of cards){
        if(c.children[0].classList.contains('hide')){
            return false;
        }
    } 
   return true;
};
