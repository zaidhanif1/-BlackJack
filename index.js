let firstCard = 2
let secondCard = 4
let cards = document.querySelector("#cards")
let sum = firstCard + secondCard
let blackJackP = document.getElementById("blackJackP")
let message = ""
let sumId = document.querySelector("#sum")


let cardsArray = [firstCard, secondCard]

function start()
{
    renderGame()
}

function renderGame()
{
   
    if (sum < 21) 
        {
        message = "Would you like to draw a new card?";
    } else if (sum === 21) 
        {
        message = "You win!";
    } else if (sum > 21)
         {
        message = "You lost, again. Go back to your family Paul.";
    }

    blackJackP.textContent = message
                sumId.textContent = "Sum: " + sum;
                cards.textContent = "Cards: ";
                for (let i = 0; i < cardsArray.length; i++)
                {
                    cards.textContent +=  cardsArray[i] + " "
                }


            }
function newCard()
{
    let newCard = getRandomCard()
    sum += newCard
    cardsArray.push(newCard)
    renderGame()
}
function  getRandomCard ()
{
    for (let i = 0; i < 10; i++)
        {
        if (i % 2 === 0)
        {
            newCard =  [2, 4, 6, 8]
            return newCard.push[i]
        }
        else
        {
            newCard = [1, 3, 5, 7, 9]
            return newCard.push[i]
        

        }
    }
}