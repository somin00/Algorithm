let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

const solution = (input) => {
  const [n, k] = input[0].split(" ").map(Number);
  let room = 0;
  const studentCount = {};

  for (let i = 1; i < input.length; i++) {
    const [gender, grade] = input[i].split(" ");
    const keyStr = gender + grade;

    if (studentCount[keyStr]) {
      studentCount[keyStr] += 1;
      if (studentCount[keyStr] >= k) {
        room += 1;
        studentCount[keyStr] = 0;
      }
    } else {
      studentCount[keyStr] = 1;
    }
  }

  for (const value of Object.values(studentCount)) {
    if (value !== 0) room += 1;
  }

  console.log(room);
};

solution(input);
