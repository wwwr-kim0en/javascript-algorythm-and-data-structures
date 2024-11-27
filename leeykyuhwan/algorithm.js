const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
  console.log(findLongestSubstring(input[0]));
    
});

function findLongestSubstring(str) {
  let start = 0;
  let maxLength = 0;
  let seen = {};

  if(!str || str.length === 0) return 0;

  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    if (seen[char] !== undefined && seen[char] >= start) {
      start = seen[char] + 1;
    }
    seen[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}