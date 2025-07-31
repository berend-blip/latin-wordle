"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor(wordList, maxAttempts = 6) {
        this.wordList = wordList;
        this.maxAttempts = maxAttempts;
        this.guesses = [];
        this.currentWord = this.selectRandomWord();
    }
    selectRandomWord() {
        const randomIndex = Math.floor(Math.random() * this.wordList.length);
        return this.wordList[randomIndex];
    }
    startGame() {
        this.guesses = [];
        this.currentWord = this.selectRandomWord();
        console.log("Game started! Try to guess the word.");
    }
    makeGuess(guess) {
        if (!this.isValidGuess(guess)) {
            return "Invalid guess. Please try again.";
        }
        this.guesses.push(guess);
        return this.checkWin(guess);
    }
    isValidGuess(guess) {
        return guess.length === this.currentWord.length && /^[a-zA-Z]+$/.test(guess);
    }
    checkWin(guess) {
        if (guess === this.currentWord) {
            return "Congratulations! You've guessed the word!";
        }
        else if (this.guesses.length >= this.maxAttempts) {
            return `Game over! The correct word was: ${this.currentWord}`;
        }
        else {
            return "Keep trying!";
        }
    }
    getGuesses() {
        return this.guesses;
    }
}
exports.default = Game;
