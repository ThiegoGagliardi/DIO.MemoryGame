class backgroundCard {
    constructor (url, ordem){
        this.url = url;
        this.ordem = ordem;
    }
}

const piratesOnePiece =[
    new backgroundCard("src/assets/wantedSanji.jpg", Math.random()),
    new backgroundCard("src/assets/wantedSanji.jpg", Math.random()),
    new backgroundCard("src/assets/wantedNicoRobin.jpg", Math.random()),
    new backgroundCard("src/assets/wantedNicoRobin.jpg", Math.random()),
    new backgroundCard("src/assets/wantedNami.jpg", Math.random()),
    new backgroundCard("src/assets/wantedNami.jpg", Math.random()),
    new backgroundCard("src/assets/wantedAce.jpg", Math.random()),
    new backgroundCard("src/assets/wantedAce.jpg", Math.random()),
    new backgroundCard("src/assets/wantedLuffy.jpg", Math.random()),
    new backgroundCard("src/assets/wantedLuffy.jpg", Math.random()),
    new backgroundCard("src/assets/wnatedZoro.jpg", Math.random()),
    new backgroundCard("src/assets/wnatedZoro.jpg", Math.random())
];

let shufflePiratesOnePiece = piratesOnePiece.sort((cardA, cardB)=>(cardA.ordem - cardB.ordem));

let opensCards = [];

state = {
    view:{
        cards : document.getElementsByClassName("game")[0]
    }
}

for (let i = 0; i < piratesOnePiece.length; i++){
    
    let box       = document.createElement("div");
    box.className = "card";    
    
    let img = document.createElement("img")
    img.src =  shufflePiratesOnePiece[i].url;

    box.appendChild(img);
    box.onclick = handleClick;

    state.view.cards.appendChild(box);
}

function handleClick()
{
    if (opensCards.length < 2){
        this.classList.add("boxOpen");
        opensCards.push(this);
    }

    if(opensCards.length === 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch()
{ 
    const imgCard1 = opensCards[0].querySelector('img');
    const imgCard2 = opensCards[1].querySelector('img');
    
    if (imgCard1.getAttribute('src') === imgCard2.getAttribute('src')){
        opensCards.forEach((card) => card.classList.add("boxMatch"));
    }else{
        opensCards.forEach((card) => card.classList.remove("boxOpen"));
    }

    opensCards = [];

    if (document.getElementsByClassName("boxMatch").length === piratesOnePiece.length){
        alert("Você ganhou");
    }
}