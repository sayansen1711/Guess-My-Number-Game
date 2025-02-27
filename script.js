const randomNumber = Math.trunc(Math.random() * 20) + 1; //generating random number
//console.log(randomNumber);
//document.querySelector('.box').textContent = randomNumber; //later to be commented to hide the secret number
var score = 20, highscore = 0;
function submit() {

    var input = Number(document.querySelector('#userInput').value);
    console.log('inside user input ', input, typeof input);
    if (!input) {
        document.querySelector('#guessingText').innerHTML = '&#9940 No number!';
    }
    else if (input > randomNumber) {
        document.querySelector('#guessingText').innerHTML = '&#128200 Too High!';
        score--;
        document.querySelector('#currentScore').textContent = score;
    }
    else if (input < randomNumber) {
        document.querySelector('#guessingText').innerHTML = '&#128201 Too Low!';
        score--;
        document.querySelector('#currentScore').textContent = score;
    }
    else {
        document.querySelector('#guessingText').innerHTML = '&#127881 Correct Number!';
        //document.querySelector('body').innerHTML='<style>body{background-color: green;}</style>';
        document.querySelector('body').style.backgroundColor = 'green';
        if (score > highscore)
            highscore = score;
        document.querySelector('#maxScore').textContent = highscore;
    }
}

document.querySelector('#reset').addEventListener('click', function () { //implementing Again! button logic using user event listener
    document.querySelector('.box').textContent = '?';                   //changed to ? after right value is displayed on Box
    document.querySelector('#currentScore').textContent = '20';         //reset the current score to 20
    document.getElementById('userInput').value = '';                    //reset the user input text field
    document.querySelector('#guessingText').innerHTML = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = 'black';
    score = 20;
});

//document.querySelector('#reset').addEventListener('click', reset());
