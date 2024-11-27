const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  line.split(",").map((el) =>  input.push(el));
}).on("close", () => {
  const [n, m] = input;
  const arr = n.split(" ").map((el) => parseInt(el));
  const num = parseInt(m);
  
  console.log(minSubArrayLen(arr, num));
    
});

function minSubArrayLen(arr, target) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLength = Infinity;

  while (end < arr.length) {
    sum += arr[end];

    while (sum >= target) {
      minLength = Math.min(minLength, end - start + 1);
      sum -= arr[start];
      start++;
    }

    end++;
  }

  return minLength === Infinity ? 0 : minLength;
}