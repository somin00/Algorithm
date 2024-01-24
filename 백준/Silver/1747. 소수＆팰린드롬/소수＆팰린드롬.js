let input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString();

function isPrime(number) {
  if (number === 1) return false;
  let isPrime = true;

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

while (true) {
  if (isPrime(input) && isPalindrome(input.toString())) {
    break;
  } else {
    input++;
  }
}

console.log(input);
