function translatePigLatin(str) {
  if (/^[aeiou]/.test(str)) {
    // Starts with a vowel
    return str + "way";
  } else {
    const vowelIndex = str.search(/[aeiou]/);
    if (vowelIndex === -1) {
      // No vowels found
      return str + "ay";
    }
    // Normal case: move consonants before first vowel
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }
}

console.log(translatePigLatin("consonant"));