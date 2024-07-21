let fcard = getrandomcard()
let scard = getrandomcard()

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

let player = 
{
     name :  'nishtha',
     chip :   123
}
let playerEl= document.getElementById("player-el")
playerEl.textContent = player.name + ': $' + player.chip

function startgame()
{
    isAlive = true
    let fcard = getrandomcard()
    let scard = getrandomcard()
    cards = [fcard,scard]
    sum = fcard+scard
    rendergame()
}

function getrandomcard()
{
    let rn =  Math.ceil(Math.random()*13)
    if(rn > 10){
            return 10
        }else if(rn === 1){
            return 11
        }else{
            return rn
        }
}

function rendergame()
{
    cardEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++)
    {
        cardEl.textContent +=  cards[i] + " "
    } 
    sumEl.textContent = "sum: "+ sum   
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        message = "You have got the blackjack"
        hasBlackJack = true
    }else{  
        message = "You are out of the game"
        isAlive = false
    }      
    messageEl.textContent = message 
}

function newcard()
{

    if(isAlive === true && hasBlackJack === false)
    {
    console.log("new card")
    let ncard = getrandomcard()
    cards.push(ncard)
    sum += ncard
    rendergame()
    }
}