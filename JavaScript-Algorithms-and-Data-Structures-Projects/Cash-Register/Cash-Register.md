# Cash Register

Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid` is a 2D array listing available currency.

The `checkCashRegister()` function should always return an object with a `status` key and a `change` key.

Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key change if it is equal to the `change` due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the `change` key.

| Currency Unit         | Amount                |
|-----------------------|------------------------|
| Penny                | $0.01 (PENNY)          |
| Nickel               | $0.05 (NICKEL)         |
| Dime                 | $0.10 (DIME)           |
| Quarter              | $0.25 (QUARTER)        |
| Dollar               | $1 (ONE)               |
| Five Dollars         | $5 (FIVE)              |
| Ten Dollars          | $10 (TEN)              |
| Twenty Dollars       | $20 (TWENTY)           |
| One-hundred Dollars  | $100 (ONE HUNDRED)     |

See below for an example of a cash-in-drawer array:

```javascript
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
```

### Instructions:
1. `checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` should return an object.
2. `checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` should return `{status: "OPEN", change: [["QUARTER", 0.5]]}`.
3. `checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` should return `{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}`.
4. `checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` should return `{status: "INSUFFICIENT_FUNDS", change: []}`.
5. `checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` should return `{status: "INSUFFICIENT_FUNDS", change: []}`.
6. `checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` should return `{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}`.

## Before Output:
```javascript
function checkCashRegister(price, cash, cid) {
  let change;
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
```

## After Output:
```javascript
function checkCashRegister(price, cash, cid) {
  const UNIT_VALUES = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
  totalCid = Math.round(totalCid * 100) / 100;

  // Case 1: Not enough money in drawer
  if (changeDue > totalCid) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  // Case 2: Exact amount in drawer, close the drawer
  if (changeDue === totalCid) {
    return {status: "CLOSED", change: cid};
  }

  // Case 3: Drawer has more money than change due — calculate change
  let changeArr = [];
  // Start from highest denomination and go down
  for (let i = cid.length - 1; i >= 0; i--) {
    let coinName = cid[i][0];
    let coinTotal = cid[i][1];
    let coinValue = UNIT_VALUES[coinName];
    let coinCount = Math.floor(coinTotal / coinValue);
    let amountToReturn = 0;

    while (changeDue >= coinValue && coinCount > 0) {
      changeDue -= coinValue;
      changeDue = Math.round(changeDue * 100) / 100; // fix floating point
      coinCount--;
      amountToReturn += coinValue;
    }

    if (amountToReturn > 0) {
      changeArr.push([coinName, amountToReturn]);
    }
  }

  // After trying all denominations, if changeDue is not zero, insufficient funds
  if (changeDue > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  // Otherwise, return OPEN with change array
  return {status: "OPEN", change: changeArr};
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
```