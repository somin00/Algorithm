const [total, connect, ...pair] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const pairObj = {};

for (let i = 0; i < pair.length; i++) {
  const [key, value] = pair[i].split(" ");
  if (pairObj[key]) {
    pairObj[key].push(value);
  } else {
    pairObj[key] = [value];
  }

  if (pairObj[value]) pairObj[value].push(key);
  else pairObj[value] = [key];
}

const infection = pairObj[1];

if (!infection) {
  console.log(0);
} else {
  for (let i = 0; i < infection.length; i++) {
    const connected = pairObj[infection[i]];
    if (!connected) break;
    for (let j = 0; j < connected.length; j++) {
      if (connected[j] === "1") continue;
      if (!infection.includes(connected[j])) infection.push(connected[j]);
    }
  }

  console.log(infection.length);
}
