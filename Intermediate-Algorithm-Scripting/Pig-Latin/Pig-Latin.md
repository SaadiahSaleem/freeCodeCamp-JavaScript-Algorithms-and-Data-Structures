# Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add `ay` to it.

- If a word begins with a vowel, just add `way` at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

### Instructions:
1. `translatePigLatin("california")` should return the string `aliforniacay`.
2. `translatePigLatin("paragraphs")` should return the string `aragraphspay`.
3. `translatePigLatin("glove")` should return the string `oveglay`.
4. `translatePigLatin("algorithm")` should return the string `algorithmway`.
5. `translatePigLatin("eight")` should return the string `eightway`.
6. Should handle words where the first vowel comes in the middle of the word. `translatePigLatin("schwartz")` should return the string `artzschway`.
7. Should handle words without vowels. `translatePigLatin("rhythm")` should return the string `rhythmay`.

## Before Output:
```javascript
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
```

## After Output:
```javascript
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
```