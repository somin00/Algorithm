const LIMIT = 10000;
const construct = new Array(LIMIT + 1).fill(false);

for (let i = 1; i <= LIMIT; i++) {
  let addNum = 0;
  const strArr = i.toString().split("").map(Number);
  addNum = i + strArr.reduce((a, c) => a + c);
  construct[addNum] = true;
}

construct.map((isConstruct, index) => {
  if (index === 0) return;
  if (!isConstruct) console.log(index);
});
