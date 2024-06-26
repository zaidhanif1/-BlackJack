let sum = 0;
let cardsArray = [];
let hasBlackJack = false;
let isAlive = false;
let cards = document.querySelector("#cards");
let blackJackP = document.getElementById("blackJackP");
let message = "";
let sumId = document.querySelector("#sum");
let playerEl = document.querySelector("#player-el");

let player = {
    name: "Zaid",
    chips: 190
};

playerEl.textContent = player.name + ": $" + player.chips;

function start() {
    if (sum === 0) {
        isAlive = true;
        hasBlackJack = false;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        sum = firstCard.value + secondCard.value;
        cardsArray = [firstCard, secondCard];
        renderGame();

        // Disable the start button after starting the game
        let startButton = document.querySelector("#start-button");
        startButton.disabled = true;
    }
}

function renderGame() {
    cards.innerHTML = "";
    for (let i = 0; i < cardsArray.length; i++) {
        let cardImage = document.createElement("img");
        cardImage.src = `PNG-cards-1.3/${cardsArray[i].name}.png`;
        cardImage.classList.add("card");
        cards.appendChild(cardImage);
    }

    if (sum < 21) {
        message = "Would you like to draw a new card?";
        isAlive = true;
        hasBlackJack = false;
    } else if (sum === 21) {
        message = "You win!";
        hasBlackJack = true;
        isAlive = false;
    } else {
        message = "You lost.";
        hasBlackJack = false;
        isAlive = false;
    }

    blackJackP.textContent = message;
    sumId.textContent = "Sum: " + sum;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card.value;
        cardsArray.push(card);
        renderGame();
    }
}

function getRandomCard() {
    let cardValues = [
        { value: 2, name: "2" },
        { value: 3, name: "3" },
        { value: 4, name: "4" },
        { value: 5, name: "5" },
        { value: 6, name: "6" },
        { value: 7, name: "7" },
        { value: 8, name: "8" },
        { value: 9, name: "9" },
        { value: 10, name: "10" },
        { value: 10, name: "jack" },
        { value: 10, name: "queen" },
        { value: 10, name: "king" },
        { value: 11, name: "ace" }
    ];
    let suits = ["hearts", "diamonds", "clubs", "spades"];

    let randomValue = cardValues[Math.floor(Math.random() * cardValues.length)];
    let randomSuit = suits[Math.floor(Math.random() * suits.length)];
    
    let cardName = `${randomValue.name}_of_${randomSuit}`;
    return { value: randomValue.value, suit: randomSuit, name: cardName };
}

function reset() {
    sum = 0;
    cardsArray = [];
    hasBlackJack = false;
    isAlive = false;
    message = "";

    // Clear the cards displayed on the screen
    cards.innerHTML = "";

    // Reset the text content for messages and sum display
    blackJackP.textContent = "Would you like to play?";
    sumId.textContent = "";

    // Enable the start button again if it was disabled
    let startButton = document.querySelector("#start-button");
    startButton.disabled = false;
}
