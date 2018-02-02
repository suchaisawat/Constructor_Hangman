//Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
//
//
//A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
//A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
var Letter = require("./letter.js");

var chosenWord = "";
var placeHolder = function (chosenWord) {
    var letterCollection = [];
    for (var i = 0; i < chosenWord.length; i++) {
        letterCollection.push(new Letter(chosenWord.charAt(i)));
    }
    return letterCollection;
}

var Word = function (chosenWord) {
    this.chosenWord = chosenWord;
    this.letterCollection = placeHolder(this.chosenWord);
    this.found = false;


    Word.prototype.checkIfLetterFound = function (guessLetter) {
        var whatToReturn = false;
        for (var i = 0; i < this.letterCollection.length; i++) {
            whatToReturn |= this.letterCollection[i].updateGuessLetter(guessLetter);

        }
        return whatToReturn;

    }

    Word.prototype.didWeFindTheWord = function () {
        var whatToReturn = true;
        for (var i = 0; i < this.letterCollection.length; i++) {
            whatToReturn &= this.letterCollection[i].hasGuessed;
        }
        return whatToReturn;

    }

    Word.prototype.wordShow = function () {

        var string1 = "";
        for (var i = 0; i < this.letterCollection.length; i++) {
            string1 += " " + this.letterCollection[i].displayLetter();

        }
        return string1;
    }
}



module.exports = Word;
