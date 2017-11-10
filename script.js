console.log('in number game');

var randomNumber

$(document).ready(function() {
createRandomNumber();
$('#submit-button').on('click', submitGuess)
$('#new-game-button').on('click', startNewGame)


}//end function
);

function createRandomNumber(){
    randomNumber = Math.floor(Math.random()*10)+1;
    console.log(randomNumber);
};//end creatRandomNumber

function submitGuess () {
    var guess = $('#Input-Number').val()
    console.log("Guess: ", guess);

    if (guess == randomNumber) {
        $('#number-guesser').css('background-color', 'green')
        console.log('correct guess');
        $('#inputFeedback').append('<li>Correct!</li>');
        //$('#submit-button').remove();
        newGameButton();
    
    }
    else if (guess > randomNumber) {
        $('#number-guesser').css('background-color', 'orange')
        console.log('too high');
        $('#inputFeedback').append('<li>Lower!</li>')
    }
    else if (guess < randomNumber) {
        $('#number-guesser').css('background-color', 'yellow')
        console.log('Too low');
        $('#inputFeedback').append('<li>Higher!</li>')
    }
}

function newGameButton() {
    $('#submit-button').replaceWith('<button id="new-game-button">New Game</button>');
    $('#new-game-button').on('click', startNewGame);
    
}

function startNewGame() {
    console.log('in startNewGame');
    $('#inputFeedback').children().remove();
    $('#inputFeedback').append('<li>New Game</li>');
    $('#new-game-button').replaceWith('<button id="submit-button">Submit</button>');
    //$('#submit-button').replaceWith('<button id="new-game-button">New Game</button>');
    $('#submit-button').on('click', submitGuess);
    createRandomNumber();
    

}