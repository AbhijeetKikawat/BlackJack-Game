//Card Variables
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack", 
              "Ten", "Nine", "Eight", "Seven", "Six",
              "Five", "Four", "Three", "Two"];	


//DOM Variables
let textArea = document.getElementById("text-area");
let newGameButton = document.getElementById("new-game-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");

//Game Variables

let gameStarted = false,
	gameOver = false,
	playerWon = false,
	dealerCards = [],
	playerCards = [],
	dealerScore = 0,
	playerScore = 0,
	deck = [];

hitButton.style.display = "none";
stayButton.style.display = "none";
showStatus();

//Event Handler for New Game Button

newGameButton.addEventListener("click",function() {
				gameStarted = true;
				gameOver = false;
				playerWon = false;
				
				deck = createDeck();
				shuffleDeck(deck);
				dealercards = [getNextCard(), getNextCard()];
				playerCards = [getNextCard(), getNextCard()];
				
				newGameButton.style.display = "none";
				hitButton.style.display = "inline";
				stayButton.style.display = "inline";
				showStatus();
				});



//Function for Creating a Deck

function createDeck()
{
	let deck=[];
	for(let suitIdx = 0; suitIdx < suits.length; suitIdx++)
	{
		for(let valueIdx = 0; valueIdx < values.length; valueIdx++)
		{
			let card = {suit: suits[suitIdx], value: values[valueIdx]};
			deck.push(card);
		}
	}
	return deck;
}

function shuffleDeck(deck)
{
	for(let i=0; i<deck.length; i++)
	{
		let swapIdx = Math.trunc(Math.random() * deck.length);
		let temp = deck[swapIdx];
		deck[swapIdx] = deck[i];
		deck[i] = temp;
	}
}

function getCardString(card)
{
	return card.value + " of " + card.suit;
}

function getNextCard()
{
	return deck.shift();
}

function showStatus()
{
	if(!gameStarted)
	{
		textArea.innerText = "Welcome to BlackJack!";
		return;
	}
	
	for(let i=0; i<deck.length; i++)
	{
		textArea.innerText += "\n" + getCardString(deck[i]);
	}
}

