# Use Destructuring Assignment to Assign Variables from Nested Objects

You can use the same principles from the previous two lessons to destructure values from nested objects.

Using an object similar to previous examples:

```javascript
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Here's how to extract the values of object properties and assign them to variables with the same name:

```javascript
const { johnDoe: { age, email }} = user;
```

And here's how you can assign an object properties' values to variables with different names:

```javascript
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables `lowToday` and `highToday` the values of `today.low` and `today.high` from the `LOCAL_FORECAST` object.

### Instructions:
1. You should remove the ES5 assignment syntax.
2. You should use destructuring to create the `lowToday` variable.
3. You should use destructuring to create the `highToday` variable.
4. `lowToday` should be equal to `64` and `highToday` should be equal to `77`.

## Before Output:
```javascript
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line
```

## After Output:
```javascript
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const { today : {low: lowToday, high: highToday}} = LOCAL_FORECAST;


// Only change code above this line

console.log({ today : {low: lowToday, high: highToday}});
```