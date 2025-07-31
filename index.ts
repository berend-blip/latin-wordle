import Game from './game';
import { latinWords } from './latinWords'; // Adjust import if needed

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const game = new Game(latinWords);

function promptGuess() {
    rl.question(`Enter your guess (${game.getGuesses().length + 1}/${6}): `, (answer) => {
        const feedback = game.makeGuess(answer.trim().toLowerCase());
        console.log(feedback);

        if (feedback.startsWith("Congratulations") || feedback.startsWith("Game over")) {
            rl.close();
        } else {
            promptGuess();
        }
    });
}

console.log("Welcome to Latin Wordle!");
game.startGame();
console.log(`The word has ${game['currentWord'].length} letters.`); // For debugging, remove in production
promptGuess();