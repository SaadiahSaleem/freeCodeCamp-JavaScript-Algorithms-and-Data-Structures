# Understanding Case Sensitivity in Variables

In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

`MYVAR` is not the same as `MyVar` nor `myvar`. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you *do not* use this language feature.

**Best Practice**

Write variable names in JavaScript in *camelCase*. In *camelCase*, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

**Examples:**
```javascript
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```
Modify the existing declarations and assignments so their names use *camelCase*.

Do not create any new variables.

### Instructions:
1. studlyCapVar should be defined and have a value of 10.
2. properCamelCase should be defined and have a value of the string A String.
3. titleCaseOver should be defined and have a value of 9000.
4. studlyCapVar should use camelCase in both declaration and assignment sections.
5. properCamelCase should use camelCase in both declaration and assignment sections.
6. titleCaseOver should use camelCase in both declaration and assignment sections.

## Before Output:
```javascript
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
```

## After Output:
```javascript
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;
var STUDLYCAPVAR;
var PRoperCAmelCAse;
var tITLEcASEoVER;
var studlyCapVar;
var titleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
tITLEcASEoVER = 9000;
```
