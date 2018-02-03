//index.js: The file containing the logic for the course of the game, which depends on Word.js and:
//
//
var inquirer = require("inquirer");
var Word = require("./word.js");
var Letter = require("./letter.js");
var prompt = require("prompt");

prompt.start();
console.log("This is a hangman game. Please guess type your letter. Good Lucks!");

var game = function () {
    this.wordList = ["Waylon", "Dalton", "Justine", "Henderson", "Abdullah", "Marcus", "Cruz", "Randolph"];
    this.guessesRemaining = 10;
    this.currentWrd = null;
    this.rightLetter = [];
    this.wrongLetter = [];
    this.Wins = 0;
    this.Losses = 0;
    this.startGame = function (wrd) {
        var chosenWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
        this.currentWrd = new Word(chosenWord);
        this.askUser();
        console.log(this.currentWrd.wordShow());
    }

    this.askUser = function () {
        var self = this;
        //        console.log("Heres the value: " + self.currentWrd.didWeFindTheWord());
        if (self.currentWrd.didWeFindTheWord()) {
            console.log("You won!!!");
            return 1;
        } else {

            prompt.get(["guessLetter"], function (err, result) {

                //     
                console.log("The letter you guessed is " + result.guessLetter);

                var howManyDidUserGuessSoFar = self.currentWrd.checkIfLetterFound(result.guessLetter);

                if (!howManyDidUserGuessSoFar) {
                    console.log("Incorrect!");
                    self.guessesRemaining -= 1;
                    console.log("Guesses remaining: " + self.guessesRemaining);
                } else {
                    console.log("Correct!");
                }

                if (self.guessesRemaining > 0 || self.currentWrd === false) {
                    self.askUser();
                } else if (self.guessesRemaining === 0) {
                    console.log("Sorry, the game is over! " + "The answer is :" + self.currentWrd.chosenWord);
                    //                    console.log(self.currentWrd.wordShow());
                }

                console.log(self.currentWrd.wordShow());

            });
        }
    }
}

var game1 = new game();
game1.startGame();
