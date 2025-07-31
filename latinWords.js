"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomWord = exports.latinWords = void 0;
const latinWords = [
    "amor",
    "aqua",
    "bellum",
    "civitas",
    "corpus",
    "fortis",
    "gloria",
    "lumen",
    "natura",
    "pax",
    "sanguis",
    "tempus",
    "veritas",
    "vita"
];
exports.latinWords = latinWords;
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * latinWords.length);
    return latinWords[randomIndex];
}
exports.getRandomWord = getRandomWord;
