const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
  let count = 0;
  for (const user in allUsers) {
    if (allUsers[user].online === true) {
      count++;
    }
  }
  return count;
  //console.log(users, allUsers[users]);
  // Only change code above this line
}

console.log(countOnline(users));
console.log(countOnline({ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }));
console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }));
console.log(countOnline({ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }));
