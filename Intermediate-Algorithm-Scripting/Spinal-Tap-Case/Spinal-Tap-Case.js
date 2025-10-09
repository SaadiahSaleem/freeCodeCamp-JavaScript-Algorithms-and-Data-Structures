function spinalCase(str) {

  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ').toLowerCase().trim().split(/\s+/).join('-');

}

console.log(spinalCase('This Is Spinal Tap'));