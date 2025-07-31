"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResult = exports.isValidGuess = void 0;
function isValidGuess(guess, wordLength) {
    return guess.length === wordLength;
}
exports.isValidGuess = isValidGuess;
function formatResult(guess, correctWord) {
    let result = '';
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === correctWord[i]) {
            result += '🟩'; // Correct letter in the correct position
        }
        else if (correctWord.includes(guess[i])) {
            result += '🟨'; // Correct letter in the wrong position
        }
        else {
            result += '⬜'; // Incorrect letter
        }
    }
    return result;
}
exports.formatResult = formatResult;
