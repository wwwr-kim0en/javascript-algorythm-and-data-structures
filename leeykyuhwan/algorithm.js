const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  line.split(",").map((el) =>  input.push(el));
}).on("close", () => {
  const [n, m] = input;
  
  console.log(isSubsequence(n, m));
    
});

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (j < str2.length) {
      if (str1[i] === str2[j]) {
          i++;
      }
      if (i === str1.length) {
          return true;
      }
      j++;
  }

  return false;
}
