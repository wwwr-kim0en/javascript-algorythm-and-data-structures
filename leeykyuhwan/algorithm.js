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
  
  console.log(maxSubarraySum(arr, num));
    
});

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  // 첫 번째 부분 배열의 합 계산
  for (let i = 0; i < num; i++) {
      maxSum += arr[i];
  }

  tempSum = maxSum;

  // 슬라이딩 윈도우 기법 사용
  for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
