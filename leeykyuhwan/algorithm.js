const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  line.split(",").map((el) => input.push(el.trim()));
}).on("close", () => {
  console.log(areThereDuplicates(...input));
    
});

function areThereDuplicates(...args) {
  // 정렬 (O(n log n))
  args.sort();

  let i = 0;
  for (let j = 1; j < args.length; j++) {
      if (args[i] === args[j]) {
          return true; // 중복 발견
      }
      i++;
  }

  return false; // 중복 없음
}
