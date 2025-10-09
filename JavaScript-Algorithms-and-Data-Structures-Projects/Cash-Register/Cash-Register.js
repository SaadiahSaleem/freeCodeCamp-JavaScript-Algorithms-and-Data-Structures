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