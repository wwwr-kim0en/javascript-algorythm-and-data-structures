const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  line.split(",").map((el) =>  input.push(el));
}).on("close", () => {
  const [n, m] = input;
  const arr = n.split(" ").map(Number);
  const num = parseFloat(m);
  console.log(averagePair(arr, num));
    
});

const averagePair = (arr, target) => {
  if (arr.length === 0) return false; // 빈 배열 처리

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
      const avg = (arr[left] + arr[right]) / 2;

      if (avg === target) {
          return true; // 목표 평균과 일치하는 쌍 발견
      } else if (avg < target) {
          left++; // 평균이 작으면 왼쪽 포인터 이동
      } else {
          right--; // 평균이 크면 오른쪽 포인터 이동
      }
  }

  return false; // 쌍을 찾지 못한 경우
}

