const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    line.split(",").map((el) => input.push(parseInt(el)));
}).on("close", () => {
    console.log(countUniqueValues(input));
    
});

function countUniqueValues(arr) {
  if (arr.length === 0) return 0; // 빈 배열 처리

  let i = 0; // 첫 번째 포인터

  for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
          i++; // 고유 값 발견 시 포인터 이동
          arr[i] = arr[j]; // 새로운 고유 값을 저장
      }
  }

  return i + 1; // 고유 값의 개수는 포인터 i의 위치 + 1
}
