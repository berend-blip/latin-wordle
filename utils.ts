export function isValidGuess(guess: string, wordLength: number): boolean {
    return guess.length === wordLength;
}

export function formatResult(guess: string, correctWord: string): string {
    let result = '';
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === correctWord[i]) {
            result += '🟩'; // Correct letter in the correct position
        } else if (correctWord.includes(guess[i])) {
            result += '🟨'; // Correct letter in the wrong position
        } else {
            result += '⬜'; // Incorrect letter
        }
    }
    return result;
}