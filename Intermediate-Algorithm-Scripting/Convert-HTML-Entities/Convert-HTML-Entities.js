function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return str
    .split('')
    .map(char => htmlEntities[char] || char)
    .join('');
}

console.log(convertHTML("Dolce & Gabbana"));  // Dolce &amp; Gabbana
console.log(convertHTML("<>"));                // &lt;&gt;
console.log(convertHTML("Stuff in 'quotes'")); // Stuff in &apos;quotes&apos;