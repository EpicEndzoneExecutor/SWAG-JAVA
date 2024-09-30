// JavaScript code for Quark's Casino

// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the play button element by its ID
    var playButton = document.getElementById('playButton');
    // Add a 'click' event listener to the play button
    playButton.addEventListener('click', playGame);
});

// Function that implements the game, called when the button is clicked
function playGame() {
    // Generate a random number between 1 and 6 for die1
    var die1 = rollDie();
    // Generate a random number between 1 and 6 for die2
    var die2 = rollDie();
    // Calculate the sum of die1 and die2
    var sum = die1 + die2;
    // Get the div element where we will display the game result
    var resultDiv = document.getElementById('gameResult');
    // Display the dice rolls and the sum
    resultDiv.innerHTML = "You rolled a " + die1 + " and a " + die2 + ". Sum is " + sum + ".<br>";
    // Update the image source for die1 based on the roll
    document.getElementById('die1Image').src = "images/die" + die1 + ".png";
    // Update the image source for die2 based on the roll
    document.getElementById('die2Image').src = "images/die" + die2 + ".png";
    // Check if the sum is 7 or 11
    if (sum == 7 || sum == 11) {
        // If sum is 7 or 11, player loses
        resultDiv.innerHTML += "CRAPS – you lose!";
    // Else if both dice are the same and die1 is even
    } else if (die1 == die2 && die1 % 2 == 0) {
        // Player wins
        resultDiv.innerHTML += "You won!";
    } else {
        // In all other cases, it's a push
        resultDiv.innerHTML += "You pushed!";
    }
}

// Function to simulate rolling a die (returns a random integer between 1 and 6)
function rollDie() {
    // Generate a random number between 1 and 6
    var die = Math.floor(Math.random() * 6) + 1;
    // Return the generated number
    return die;
}

// Another function that takes a parameter and uses this input value and outputs results
function checkEven(number) {
    // Check if the number is even using modulus operator
    if (number % 2 == 0) {
        // Return a message indicating the number is even
        return number + " is even.";
    } else {
        // Return a message indicating the number is odd
        return number + " is odd.";
    }
}
