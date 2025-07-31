class Game {
    private wordList: string[];
    private currentWord: string;
    private guesses: string[];
    private maxAttempts: number;
    private wordLength: number;

    constructor(wordList: string[], maxAttempts: number = 6, wordLength: number = 5) {
        this.wordLength = wordLength;
        this.wordList = wordList.filter(word => word.length === this.wordLength);
        this.maxAttempts = maxAttempts;
        this.guesses = [];
        this.currentWord = this.selectRandomWord();
    }

    private selectRandomWord(): string {
        const randomIndex = Math.floor(Math.random() * this.wordList.length);
        return this.wordList[randomIndex];
    }

    public startGame(): void {
        this.guesses = [];
        this.currentWord = this.selectRandomWord();
        console.log(`Game started! Try to guess the ${this.wordLength}-letter word.`);
    }

    public makeGuess(guess: string): string {
        if (!this.isValidGuess(guess)) {
            return `Invalid guess. Please enter a ${this.wordLength}-letter word.`;
        }

        this.guesses.push(guess);
        return this.checkWin(guess);
    }

    private isValidGuess(guess: string): boolean {
        return guess.length === this.wordLength && /^[a-zA-Z]+$/.test(guess);
    }

    private checkWin(guess: string): string {
        if (guess === this.currentWord) {
            return "Congratulations! You've guessed the word!";
        } else if (this.guesses.length >= this.maxAttempts) {
            return `Game over! The correct word was: ${this.currentWord}`;
        } else {
            // Feedback for each letter
            let feedback = '';
            for (let i = 0; i < this.wordLength; i++) {
                if (guess[i] === this.currentWord[i]) {
                    feedback += '🟩'; // correct letter, correct position
                } else if (this.currentWord.includes(guess[i])) {
                    feedback += '🟨'; // correct letter, wrong position
                } else {
                    feedback += '⬜'; // letter not in word
                }
            }
            return `Feedback: ${feedback}`;
        }
    }

    public getGuesses(): string[] {
        return this.guesses;
    }
}

export default Game;