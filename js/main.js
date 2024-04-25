// Import bands data
const bands = getAllBands();

// Initialize score variable
let score = 0;

// Function to display band information in a card
function displayBandInfo() {
    // Randomly select a band
    const randomBand = bands[Math.floor(Math.random() * bands.length)];


    // Return the correct band object for comparison
    return randomBand;
}
// Function to check user's guess
function checkGuess(userGuess, correctAnswer) {
    // Check if userGuess is null (user canceled the prompt)
    if (userGuess === null) {
        // Update feedback message on the webpage
        document.querySelector("#feedback-message").textContent = "Game canceled.";
        return false; // Exit the function
    }

    // Convert userGuess to lowercase if it's not null
    const normalizedUserGuess = userGuess.toLowerCase();

    // display band image and name
    const bandImage = document.querySelector('#bandImage');
    const bandName = document.querySelector('#bandName');
    bandImage.src = `/img/bands/${correctAnswer.img}`;
    bandName.textContent = correctAnswer.name;

    const bandImageMobile = document.querySelector('#bandImageMobile');
    const bandNameMobile = document.querySelector('#bandNameMobile');
    bandImageMobile.src = `/img/bands/${correctAnswer.img}`;
    bandNameMobile.textContent = correctAnswer.name;

    if (normalizedUserGuess === correctAnswer.name.toLowerCase()) {
        // Update feedback message on the webpage
        document.querySelector("#feedback-message").textContent = "Correct! You guessed the band correctly!";
        // Increment score
        score++;

        // Update score
        console.log(score);
        const displayScore = document.querySelector("#score");
        displayScore.textContent = score;

        const scoreProgressBar = document.querySelector("#scoreprogressbar");
        scoreProgressBar.style = `width: ${score}%;`

        return true;
    } else {
        // Update feedback message on the webpage
        document.querySelector("#feedback-message").textContent = `Sorry, that's incorrect. The correct band is ${correctAnswer.name}.`;
        return false;
    }
}

// Main game function
function playGame() {
    // Display band information
    const correctAnswer = displayBandInfo();

    // Clear any previous band information
    const gameMessagesElement = document.querySelector("#game-messages");
    gameMessagesElement.innerHTML = '';
    gameMessagesElement.classList.add("game-messages");

    // Display band information to the user
    const groupSizeElement = document.createElement('p');
    groupSizeElement.innerHTML = `Group Size: <br>${correctAnswer.groupsize}`;
    groupSizeElement.classList.add("group-message", "col-6");
    gameMessagesElement.appendChild(groupSizeElement);

    const genreElement = document.createElement('p');
    genreElement.innerHTML = `Genre: <br>${correctAnswer.genre}`;
    genreElement.classList.add("genre-message", "col-6");
    gameMessagesElement.appendChild(genreElement);

    const debutReleaseYearElement = document.createElement('p');
    debutReleaseYearElement.textContent = `Debut Album Release Year: ${correctAnswer.debutreleaseyear}`;
    gameMessagesElement.appendChild(debutReleaseYearElement);

    const mostPopularSongElement = document.createElement('p');
    mostPopularSongElement.textContent = `Most Popular Song: ${correctAnswer.mostpopularsong}`;
    gameMessagesElement.appendChild(mostPopularSongElement);

    // Create a container for the nationality
    const nationalityContainer = document.createElement('div');
    nationalityContainer.classList.add('d-flex', 'align-items-center'); // Add flex and alignment classes

    // Create a text element for "Nationality"
    const nationalityText = document.createElement('p');
    nationalityText.innerHTML = "Nationality:<br>";
    nationalityContainer.appendChild(nationalityText);

    // Create an image element for the nationality flag
    const nationalityElement = document.createElement('img');
    nationalityElement.src = `/img/flags/${correctAnswer.nationality}.png`;
    nationalityElement.height = 25;
    nationalityElement.alt = `${correctAnswer.nationality}`;
    nationalityContainer.appendChild(nationalityElement);

    // Append the nationality container to the game messages element
    gameMessagesElement.appendChild(nationalityContainer);

    // Select the submit button
    const submitButton = document.querySelector("#submit-button");

    // Add event listener for click event on submit button
    submitButton.addEventListener("click", function () {
        // Get the user's input from the input field
        const userInput = document.querySelector("#user-input").value;

        // Check user's guess
        checkGuess(userInput, correctAnswer);

        // Display the "Play Again" button
        askToPlayAgain();
    });
}


// Function to ask the user if they want to play again
function askToPlayAgain() {
    // Display play again button

    // const playAgainButton = document.createElement('button');
    // playAgainButton.textContent = "Play Again";
    // playAgainButton.classList.add('btn', 'submit-button');
    playAgainButton = document.querySelector("#playagainbutton");
    playAgainButton.removeAttribute("disabled");
    playAgainButton.removeAttribute("data-bs-toggle");
    playAgainButton.addEventListener('click', function () {
        // Clear feedback message
        document.querySelector("#feedback-message").textContent = "";

        // Start the game again
        playGame();
    });

    // Append play again button to the page
    // const playAgainContainer = document.querySelector("#play-again-container");
    // playAgainContainer.innerHTML = '';
    // playAgainContainer.appendChild(playAgainButton);
}

// Start the game
playGame();

const lightmode = document.querySelector('.light-mode-button');
const body = document.querySelector('#documentBody');
let lightmodeactivated = 1;
lightmode.addEventListener("click", function () {
    if (lightmodeactivated === 0) {
        lightmodeactivated += 1;
        body.classList.remove("light-mode");
    }
    else {
        lightmodeactivated -= 1;
        body.classList.add("light-mode");
    }
});