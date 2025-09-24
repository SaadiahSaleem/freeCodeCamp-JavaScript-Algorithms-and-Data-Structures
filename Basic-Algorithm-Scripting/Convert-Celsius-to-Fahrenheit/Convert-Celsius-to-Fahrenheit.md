# Convert Celsius to Fahrenheit

The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times `9/5`, plus `32`.

You are given a variable `celsius` representing a temperature in Celsius. Use the variable `fahrenheit` already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

### Instructions:
1. `convertCtoF(0)` should return a number
2. `convertCtoF(-30)` should return a value of `-22`
3. `convertCtoF(-10)` should return a value of `14`
4. `convertCtoF(0)` should return a value of `32`
5. `convertCtoF(20)` should return a value of `68`
6. `convertCtoF(30)` should return a value of `86`

## Before Output:
```javascript
function convertCtoF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertCtoF(30);
```

## After Output:
```javascript
function convertCtoF(celsius) {
  let fahrenheit =  (9/5 * celsius) + 32;
  return fahrenheit;
}

convertCtoF(30);
console.log(convertCtoF(0));
console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
console.log(convertCtoF(0));
console.log(convertCtoF(20));
console.log(convertCtoF(30));

```