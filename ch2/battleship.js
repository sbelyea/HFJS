var randomLoc = Math.floor(Math.random() * 5);

console.log(randomLoc);

var location1 = randomLoc;
var location2 = randomLoc + 1;
var location3 = randomLoc + 2;

var guess
var hits = 0;
var guesses = 0;
var isSunk = false;

function battleship() {
	while (!isSunk) {
		guess = prompt('Pick a number from 0-6');
		if (guess > 6 || guess < 0) {
			alert('Please pick a valid number');		
		}
		else {
			guesses = guesses + 1;
			if (guess == location1  || guess == location2 || guess == location3) {
				hits = hits + 1;
				alert('Hit!');
				if (hits === 3) {
					isSunk = true;
					alert('You sunk my battleship!');
				}
			}
			else {
				alert('You missed!');
			}
		}
	}

	alert('You took ' + guesses + ' guesses.  You had an accuracy of ' + ((hits/guesses)*100) + '%.');
};