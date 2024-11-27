const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    line.split(",").map((el) => input.push(parseInt(el)));
}).on("close", () => {
  const [n, m ] = input;
  console.log(sameFrequency(n, m));
    
});

function sameFrequency(num1, num2) {
  // 숫자를 문자열로 변환
  const str1 = num1.toString();
  const str2 = num2.toString();

  // 길이가 다르면 빈도가 같을 수 없음
  if (str1.length !== str2.length) return false;

  const frequencyCount = {};

  // 첫 번째 숫자의 자릿수를 카운팅
  for (let char of str1) {
      frequencyCount[char] = (frequencyCount[char] || 0) + 1;
  }

  // 두 번째 숫자의 자릿수를 비교하며 카운팅 감소
  for (let char of str2) {
      if (!frequencyCount[char]) return false; // 빈도 불일치 시 false
      frequencyCount[char]--;
  }

  return true;
}
