let cards = []
let sum = 0
isAlive = false
hasBlackJack = true
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-e1")
let cardsEl = document.querySelector("#cards-e1")

function randomcard(){
    let randomNumber = Math.floor(Math.random()*13)+1;
    console.log(randomNumber);
    if(randomNumber > 10){
        return 10
    }
    else{
        return randomNumber 
    }

}

function startgame(){
    let firstCard = randomcard()
    let secondCard = randomcard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    rendergame()
}

function rendergame() {
    for (let i = 0; i<cards.length; i++){
        cardsE1.innerHTML+=cards[i] + ' '
    }
    sumE1.innerHTML = "sum : " + sum;
    if(sum<=20){
        messageE1.innerHTML = "Do you want to draw a new card"
    }else if(sum == 21){
        messageEl.innerHTML = "you have won the game"
        hasBlackJack = true
    }else{
        messageE1.innerHTML = "you are out of the game"
        isAlive = false;
    }
}
function newCard(){
    if(isAlive == true && hasBlackJack ==false){
        let card = randomcard();
        sum+=card
        card.push(card);
        rendergame();
    }
}
