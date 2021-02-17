var ourCards = [
	"Ace of Spades",
	"Two of Spades",
	"Three of Spades",
	"Four of Spades",
	"Five of Spades",
	"Six of Spades",
	"Seven of Spades",
	"Eight of Spades",
	"Nine of Spades",
	"Ten of Spades",
	"Jack of Spades",
	"Queen of Spades",
	"King of Spades",
	
	"Ace of Clubs",
	"Two of Clubs",
	"Three of Clubs",
	"Four of Clubs",
	"Five of Clubs",
	"Six of Clubs",
	"Seven of Clubs",
	"Eight of Clubs",
	"Nine of Clubs",
	"Ten of Clubs",
	"Jack of Clubs",
	"Queen of Clubs",
	"King of Clubs",
	
	"Ace of Hearts",
	"Two of Hearts",
	"Three of Hearts",
	"Four of Hearts",
	"Five of Hearts",
	"Six of Hearts",
	"Seven of Hearts",
	"Eight of Hearts",
	"Nine of Hearts",
	"Ten of Hearts",
	"Jack of Hearts",
	"Queen of Hearts",
	"King of Hearts",
	
	"Ace of Diamonds",
	"Two of Diamonds",
	"Three of Diamonds",
	"Four of Diamonds",
	"Five of Diamonds",
	"Six of Diamonds",
	"Seven of Diamonds",
	"Eight of Diamonds",
	"Nine of Diamonds",
	"Ten of Diamonds",
	"Jack of Diamonds",
	"Queen of Diamonds",
	"King of Diamonds"
	];

var numCards = 52;
var ourCardNumber = 0;



function sort_cards()
{
	var randomNumber;
	var tempCard;
	for (let i=0; i<numCards; i++)
	{
		randomNumber = Math.floor(Math.random() * numCards);	// random number from 0 to 51
		if (randomNumber != i)
		{
			tempCard = ourCards[i];
			ourCards[i] = ourCards[randomNumber];
			ourCards[randomNumber] = tempCard;
		}
	}
}

function set_win_lose()
{
	let winLoseDiv = document.getElementById('win-lose');
	if (ourCards[ourCardNumber].includes("Diamonds") || ourCards[ourCardNumber].includes("Hearts"))
	{
		if (ourCards[ourCardNumber+1].includes("Diamonds") || ourCards[ourCardNumber+1].includes("Hearts"))
		{
			// you Win!!
			winLoseDiv.innerHTML = "<p>You Win!!! :)</p>";
		}
		else
		{
			// you Lose!!
			winLoseDiv.innerHTML = "<p>You Lose :(</p>";
		}
	}
	else
	{
		if (ourCards[ourCardNumber+1].includes("Diamonds") || ourCards[ourCardNumber+1].includes("Hearts"))
		{
			// you Lose!!
			winLoseDiv.innerHTML = "<p>You Lose :(</p>";
		}
		else
		{
			// you Win!!
			winLoseDiv.innerHTML = "<p>You Win!!! :)</p>";
		}
	}
	//winLoseDiv.innerHTML = "<p>You Lose :(</p>";
}

let startButton = document.getElementById('new-game');

startButton.addEventListener("click", evt => {
	
	let cardDiv = document.getElementById('our-card');
	sort_cards();
	ourCardNumber = Math.floor(Math.random() * (numCards - 1));	// random number from 0 to 50
	// ourCards[ourCardNumber]; 		// = our card
	// ourCards[ourCardNumber + 1]; 	// = their card
	var fontName;
	if (ourCards[ourCardNumber].includes("Diamonds") || ourCards[ourCardNumber].includes("Hearts"))
		fontName = "Red";
	else
		fontName = "Black";
	
	cardDiv.innerHTML = '<p><font color="' + fontName + '">' + ourCards[ourCardNumber] + '</font></p>';
	//cardDiv.innerHTML = '<p>Queen of Hearts</p>';
	let playerDiv = document.getElementById('players-card');
	playerDiv.innerHTML = '<p>No card Selected</p>';
	let winLoseDiv = document.getElementById('win-lose');
	winLoseDiv.innerHTML = "<p>Drum roll please....</p>";
	chooseButton.disabled = false;

})

let chooseButton = document.getElementById('their-card');
chooseButton.disabled = true;
chooseButton.addEventListener("click", evt => {
	
	var fontName;
	let playerDiv = document.getElementById('players-card');
	if (ourCards[ourCardNumber+1].includes("Diamonds") || ourCards[ourCardNumber+1].includes("Hearts"))
		fontName = "Red";
	else
		fontName = "Black";

	playerDiv.innerHTML = '<p><font color="' + fontName + '">' + ourCards[ourCardNumber+1] + '</font></p>';
	set_win_lose();
	chooseButton.disabled = true;
	
})
