const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let K = +input[0].split(" ")[1];
const coins = input.slice(1);

let count = 0;
for (let i = coins.length - 1; i >= 0; i--) {
  const coin = +coins[i];
  if (K < coin) continue;
  else {
    const coinCount = Math.floor(K / coin);
    count += coinCount;
    K -= coin * coinCount;
  }

  if (K === 0) break;
}

console.log(count);
