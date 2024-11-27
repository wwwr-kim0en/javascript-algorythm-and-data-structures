const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const input = [];
  
  rl.on("line", (line) => {
    input.push(line.split(" ").map((el) => parseInt(el)));
  }).on("close", () => {
    console.log('input:', input);
  });