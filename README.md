# Latin Wordle Game

Welcome to the Latin Wordle game! This project is a fun and educational way to engage with Latin vocabulary through a classic word-guessing game.

## Project Structure

The project is organized as follows:

```
latin-wordle
├── src
│   ├── game.ts          # Contains the main game logic
│   ├── latinWords.ts    # Exports an array of Latin words
│   ├── utils.ts         # Utility functions for the game
│   └── types
│       └── index.ts     # TypeScript interfaces and types
├── package.json         # npm configuration file
├── tsconfig.json        # TypeScript configuration file
└── README.md            # Project documentation
```

## Getting Started

To run the Latin Wordle game, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd latin-wordle
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Compile the TypeScript files**:
   ```
   npm run build
   ```

4. **Run the game**:
   ```
   npm start
   ```

## Game Instructions

- The game will randomly select a Latin word for you to guess.
- You will have a limited number of attempts to guess the word.
- After each guess, you will receive feedback indicating which letters are correct and in the correct position, which letters are correct but in the wrong position, and which letters are not in the word at all.

## Features

- Engaging gameplay that helps improve your Latin vocabulary.
- Random selection of words from a curated list of Latin vocabulary.
- Clear feedback on guesses to aid in learning.

## Contributing

Contributions are welcome! If you have suggestions for improvements or additional features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.