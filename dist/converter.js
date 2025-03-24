"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertNumberToLetter = convertNumberToLetter;
const FRENCH_NUMBER_WORDS = {
    0: "zéro", 1: "un", 2: "deux", 3: "trois", 4: "quatre", 5: "cinq", 6: "six", 7: "sept",
    8: "huit", 9: "neuf", 10: "dix", 11: "onze", 12: "douze", 13: "treize", 14: "quatorze",
    15: "quinze", 16: "seize", 17: "dix-sept", 18: "dix-huit", 19: "dix-neuf", 20: "vingt",
    30: "trente", 40: "quarante", 50: "cinquante", 60: "soixante", 70: "soixante-dix",
    80: "quatre-vingt", 90: "quatre-vingt-dix", 100: "cent", 1000: "mille", 1000000: "million",
    1000000000: "milliard"
};
/**
 * Convertit un nombre en lettres en français.
 * @param nb Le nombre à convertir.
 * @returns La représentation en lettres du nombre.
 * @throws {TypeError} Si le nombre n'est pas un entier positif.
 */
function convertNumberToLetter(nb) {
    if (typeof nb !== "number" || nb < 0 || !Number.isInteger(nb)) {
        throw new TypeError("Veuillez fournir un nombre entier s'il vous plaît !");
    }
    if (nb <= 20) {
        return numberToLetterUnderTwenty(nb);
    }
    else if (nb < 100) {
        return numberToLetterBetweenTwentyAndHundred(nb);
    }
    else if (nb < 1000) {
        return numberToLetterBetweenHundredAndThousand(nb);
    }
    else if (nb < 1000000) {
        return numberToLetterBetweenThousandAndMillion(nb);
    }
    else if (nb < 1000000000) {
        return numberToLetterBetweenMillionAndBillion(nb);
    }
    else {
        return numberToLetterAboveBillion(nb);
    }
}
/**
 * Convertit un nombre inférieur ou égal à 20 en lettres.
 * @param nb Le nombre à convertir.
 * @returns La représentation en lettres du nombre.
 */
function numberToLetterUnderTwenty(nb) {
    return FRENCH_NUMBER_WORDS[nb];
}
/**
 * Convertit un nombre entre 21 et 99 en lettres.
 * @param nb Le nombre à convertir.
 * @returns La représentation en lettres du nombre.
 */
function numberToLetterBetweenTwentyAndHundred(nb) {
    const base = 10 * Math.floor(nb / 10);
    const remainder = nb % 10;
    if (remainder === 0) {
        return FRENCH_NUMBER_WORDS[base];
    }
    return `${FRENCH_NUMBER_WORDS[base]}-${convertNumberToLetter(remainder)}`;
}
/**
 * Convertit un nombre entre 100 et 999 en lettres.
 * @param nb Le nombre à convertir.
 * @returns La représentation en lettres du nombre.
 */
function numberToLetterBetweenHundredAndThousand(nb) {
    const hundreds = Math.floor(nb / 100);
    const remainder = nb % 100;
    const hundredText = hundreds === 1 ? "cent" : `${convertNumberToLetter(hundreds)} cent`;
    if (remainder === 0) {
        return hundredText;
    }
    return `${hundredText} ${convertNumberToLetter(remainder)}`;
}
/**
 * Convertit un nombre entre 1000 et 999999 en lettres.
 * @param nb Le nombre à convertir.
 * @returns La représentation en lettres du nombre.
 */
function numberToLetterBetweenThousandAndMillion(nb) {
    const thousands = Math.floor(nb / 1000);
    const remainder = nb % 1000;
    const thousandText = thousands === 1 ? "mille" : `${convertNumberToLetter(thousands)} mille`;
    if (remainder === 0) {
        return thousandText;
    }
    return `${thousandText} ${convertNumberToLetter(remainder)}`;
}
/**
 * Convertit un nombre entre 1000000 et 999999999 en lettres.
 * @param nb Le nombre à convertir.
 * @returns La représentation en lettres du nombre.
 */
function numberToLetterBetweenMillionAndBillion(nb) {
    const millions = Math.floor(nb / 1000000);
    const remainder = nb % 1000000;
    const millionText = millions === 1 ? "million" : `${convertNumberToLetter(millions)} millions`;
    if (remainder === 0) {
        return millionText;
    }
    return `${millionText} ${convertNumberToLetter(remainder)}`;
}
/**
 * Convertit un nombre supérieur ou égal à 1000000000 en lettres.
 * @param nb Le nombre à convertir.
 * @returns La représentation en lettres du nombre.
 */
function numberToLetterAboveBillion(nb) {
    const billions = Math.floor(nb / 1000000000);
    const remainder = nb % 1000000000;
    const billionText = billions === 1 ? "milliard" : `${convertNumberToLetter(billions)} milliards`;
    if (remainder === 0) {
        return billionText;
    }
    return `${billionText} ${convertNumberToLetter(remainder)}`;
}
