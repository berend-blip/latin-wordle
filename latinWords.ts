const latinWords: string[] = [
    "lumen",   // 5 letters, keep
    // Add five-letter Latin words (including declined/conjugated forms)
    "bonus",
    "terra",
    "nomen",
    "agros",
    "verus",
    "manus",
    "dicta",
    "caeli",
    "mensa",
    "porta",
    "servi",
    "tamen",
    "vinum",
    "cibus",
    "domus"
];

function getRandomWord(): string {
    const randomIndex = Math.floor(Math.random() * latinWords.length);
    return latinWords[randomIndex];
}

export { latinWords, getRandomWord };