let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

 const p = document.createElement('p');
 let prevGuess = [];
 let numGuess = 0;

 let playGame = true;
  if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
  }

  function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a number valid number');
    }
    else if(guess<1){
        alert('Please enter the number greater than 1');
    }
    else if(guess>100){
        alert('Please enter the number smaller than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game is over and the random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
  }

  function checkGuess(guess){
    if(guess === randomNumber){
    displayMessage('Your guess is right');
    endGame();
    }
    else if(guess<randomNumber){
        displayMessage('number is to low');
    }
    else if(guess>randomNumber){
        displayMessage('Number is too high');
    }

  }

  function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${10-numGuess}`;
  }

  function displayMessage(message){
    loworHi.innerHTML = `<h2>${message}</h2>`;
  }

  function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }

  function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess =[];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;

    });
  }



