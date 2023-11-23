let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a Valid Number')
    }
    else if(guess < 1){
        alert('Please Enter a Number More Than 1')
    }
    else if(guess > 100){
        alert('Please Enter a Number Less Than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number Was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed it Right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is TOOO Low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is TOOO High`)
    }
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    p.style.backgroundColor = 'green'
    p.style.border = '2px solid black'
    p.style.textAlign = 'center'
    p.style.borderRadius = '5px'
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        let randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11- numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true;
    })
}
