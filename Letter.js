//display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
//

//A string value to store the underlying character for the letter
//A boolean value that stores whether that letter has been guessed yet   
var Letter = function (guessedLetter) {

    this.guessedLetter = guessedLetter;

    this.hasGuessed = false;

    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed    
    this.displayLetter = function () {
        if (this.hasGuessed === false) {

            return "_";
        } else {
            return this.guessedLetter;
        }
    }

    //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

    this.updateGuessLetter = function (letter) {
        //function that returns underlying char if correct or _ if not
        var matched = this.guessedLetter.toLowerCase() === letter.toLowerCase();
        if (matched) {
            this.hasGuessed = true;

        }
        return matched;



    }
};


module.exports = Letter;
