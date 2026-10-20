const fs = require("fs");
const code = fs.readFileSync(".playwright-cli/homepage.js", "utf8");
const start = code.indexOf("Bn=e");
const end = code.indexOf("Y=zn", start);
const bnCode = code.slice(start, end);

const longStrings = [];
const regex = /["`']([^"`'\\]{20,300})["`']/g;
let m;
while ((m = regex.exec(bnCode)) !== null) {
  const str = m[1];
  if (!str.includes("token-") && !str.includes("framer-") && !str.includes("http") && !str.includes("border") && !str.includes("transform") && !str.includes("var(")) {
    longStrings.push(str);
  }
}

console.log("Found strings in tab component:");
Array.from(new Set(longStrings)).forEach(s => console.log("-", s));
