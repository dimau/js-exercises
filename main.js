const fs = require("fs");
let input = fs.readFileSync("input.txt", "utf-8");
[J, S] = input.split("\n");

let set = new Set();
for (let i = 0; i < J.length; i++) {
  set.add(J[i]);
}

let count = 0;
for (let i = 0; i < S.length; i++) {
  if (set.has(S[i])) count++;
}

console.log(count);
