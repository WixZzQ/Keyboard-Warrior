document.getElementById("play-now-btn").addEventListener('click', function playNow(){
    //Step 1: hide the home screen.
    // To hide the screen add the class hidden to the home section
    
    const homeScreen = document.getElementById("home-screen"); 
    homeScreen.classList.add('hidden');
    
    function generateRandomAlphabet(){
        // .classList shows the class
    //Step 2: show the playground
    const playGroundScreen = document.getElementById("play-ground-screen")
    playGroundScreen.classList.remove('hidden');

    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get a random index between 0 - 25 
    const randomNumber = Math.random() * alphabets.length;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log('Your Random Alphabet: ' + alphabet);
    // console.log(index, alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    
    console.log('your random alphabet', alphabet)
    addBackgroundColor(alphabet);
    }

   
    function addBackgroundColor(letter){
        const element = document.getElementById(letter);
            element.classList.add('bg-orange-400')

    }

    function removeBackgroundColor(letter){
        const element = document.getElementById(letter);
            element.classList.remove('bg-orange-400')
    }
    

    function winSoundEffect(){
        const winSound = document.getElementById('win-sound');
        winSound.play();
    }

    function loseSoundEffect(){
        const loseSound = document.getElementById('lose-sound');
        loseSound.play();
    }

    function gameOverScreen(){
        const playGroundScreen = document.getElementById("play-ground-screen")
        const gameOverScreen = document.getElementById('game-over-screen');
        // Hide the playground and show the game over screen
        gameOverScreen.classList.remove('hidden');
        playGroundScreen.classList.add('hidden');
        updateScore();
    }
    // Initialize the game by generating the first random alphabet
    generateRandomAlphabet();

    document.addEventListener('keyup', function handleKeyboardKeyUpEvent(event){
            const playerPressed = event.key;
            console.log('Player Pressed, im impressed :3 !!', playerPressed);
        
            // get the expected to press
            const currentAlphabetElement = document.getElementById('current-alphabet');
            const currentAlphabet = currentAlphabetElement.innerText;
            const expecteedAlphabet = currentAlphabet.toLocaleLowerCase();
            console.log(playerPressed,expecteedAlphabet);
        
            //  check matched or not
            if(playerPressed === expecteedAlphabet){
                console.log('You Got em ! Point has been acquired +1')
                // update score:
                // 1. get the current score
                const currentScoreElement = document.getElementById('current-score');
                const currentScoreText = currentScoreElement.innerText;
                const currentScore = parseInt(currentScoreText);

                // 2. increase the score by 1
                const newScore = currentScore + 1;
                // 3. show the updated score
                currentScoreElement.innerText = newScore;

                //start a new round
                removeBackgroundColor(expecteedAlphabet)
                generateRandomAlphabet();
                winSoundEffect();
            }
            else{
                console.log('You Missed :( ! Point has been lost -1');
                const currentLifeElement = document.getElementById('current-life');
                const currentLifeText = currentLifeElement.innerText;
                const currentLife = parseInt(currentLifeText);

                // 2. increase the score by 1
                const updatedLife = currentLife - 1;
                // 3. show the updated score
                currentLifeElement.innerText = updatedLife;

                //start a new round
                removeBackgroundColor(expecteedAlphabet)
                generateRandomAlphabet();
                loseSoundEffect();
                
                
                if(updatedLife === 0){
                    console.log('Game Over! You Lost all your lives.');
                    gameOverScreen();
                    
                }
            }
    })
        document.getElementById('play-again-btn').addEventListener('click', function playAgainBtn(){
        const gameOverScreen = document.getElementById("game-over-screen");
        gameOverScreen.classList.add('hidden');
        const playGroundScreen = document.getElementById("play-ground-screen")
        playGroundScreen.classList.remove('hidden');
        addLife()
        restartScore();
        updateScore();
    })
    function addLife(){
                const currentLifeElement = document.getElementById('current-life');
                const currentLifeText = currentLifeElement.innerText;
                const currentLife = parseInt(currentLifeText);
                const updatedLife = currentLife + 5;
                currentLifeElement.innerText = updatedLife;
    }
    function restartScore(){
                const currentScoreElement = document.getElementById('current-score');
                const currentScoreText = currentScoreElement.innerText;
                const currentScore = parseInt(currentScoreText);
                const newScore = currentScore - currentScore;
                currentScoreElement.innerText = newScore;
    }
    function updateScore() {
        // Update the final score display on the game over screen
        const currentScoreElement = document.getElementById('current-score');
        const currentScore = parseInt(currentScoreElement.innerText);
        document.getElementById('game-score').innerText = currentScore;
    } 
})


// step 3 : Click on play again to bring back the same game like a loop.


// function handleKeyboardKeyUpEvent(event){
//     const playerPressed = event.key;
//     console.log('Player Pressed, im impressed :3 !!', playerPressed);

//     // get the expected to press
//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     const currentAlphabet = currentAlphabetElement.innerText;
//     const expecteedAlphabet = currentAlphabet.toLocaleLowerCase();
//     console.log(playerPressed,expecteedAlphabet);

//     //  check matched or not
//     if(playerPressed === expecteedAlphabet){
//         console.log('You Got em ! Point has been acquired +1')
//     }
//     else{
//         console.log('You Missed :( ! Point has been lost -1');
//     }
    
// }

// // call press function (Capture keyboard key press)
// document.addEventListener('keyup', handleKeyboardKeyUpEvent);

// document.getElementById("play-now-btn").addEventListener('click', function playNow(){
//     // Step 1: Hide the home screen by adding the "hidden" class to the home section
//     const homeScreen = document.getElementById("home-screen"); 
//     homeScreen.classList.add('hidden');

//     // Step 2: Show the playground by removing the "hidden" class from the playground section
//     const playGroundScreen = document.getElementById("play-ground-screen")
//     playGroundScreen.classList.remove('hidden');

//     // Function to generate and display a new random alphabet
//     function generateRandomAlphabet() {
//         const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//         const alphabets = alphabetString.split('');

//         // Get a random index between 0 - 25
//         const randomNumber = Math.random() * alphabets.length;
//         const index = Math.floor(randomNumber);
//         const alphabet = alphabets[index];

//         // Display the new random alphabet
//         const currentAlphabetElement = document.getElementById('current-alphabet');
//         currentAlphabetElement.innerText = alphabet;

//         // Add background color to the new alphabet element if it exists in the DOM
//         addBackgroundColor(alphabet);
//     }

//     // Function to add a background color to the correct alphabet element
//     function addBackgroundColor(letter) {
//         const element = document.getElementById(letter);
//         if (element) {
//             element.classList.add('bg-orange-400');
//         }
//     }

//     // Initialize the game by generating the first random alphabet
//     generateRandomAlphabet();

//     // Event handler to handle keyup events
//     function handleKeyboardKeyUpEvent(event) {
//         const playerPressed = event.key.toLowerCase(); // Normalize to lowercase for consistency
//         console.log('Player Pressed:', playerPressed);

//         // Get the current alphabet to be pressed
//         const currentAlphabetElement = document.getElementById('current-alphabet');
//         const expectedAlphabet = currentAlphabetElement.innerText.toLowerCase();

//         // Check if the pressed key matches the expected alphabet
//         if (playerPressed === expectedAlphabet) {
//             console.log('Correct! Point acquired +1');
//             // Generate a new random alphabet for the next round
//             generateRandomAlphabet();
//         } else {
//             console.log('Incorrect! Point lost -1');
//         }
//     }

//     // Capture keyboard key press and call the handle function
//     document.addEventListener('keyup', handleKeyboardKeyUpEvent);
// });


// function showElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.remove('hidden');
// };

// function hideElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('hidden');
// }

// function getRandomAlphabet(){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     const randomNumber = Math.random() * alphabets.length;
//     const index = Math.round(randomNumber);
//     return alphabets[index];
// }

// function continueGame(){
//     const alphabet = getRandomAlphabet();
//     console.log(alphabet)
// }

// function play(){
//     hideElementById('home-screen');
//     showElementById('play-ground-screen');
// }