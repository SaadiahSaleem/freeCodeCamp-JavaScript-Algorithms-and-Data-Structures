function translatePigLatin(str) {
   if (/^[aeiou]/.test(str)) {
    return str + "way";
  } else {
    // Find where the first vowel appears
    const vowelIndex = str.search(/[aeiou]/);
    // Move all consonants before that vowel to the end, and add "ay"
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }
}

console.log(translatePigLatin("consonant"));