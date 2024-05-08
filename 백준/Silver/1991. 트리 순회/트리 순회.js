let [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

n = +n;
const tree = {};
let answer = "";

for (let i = 0; i < arr.length; i++) {
  const [node, left, right] = arr[i].split(" ");
  tree[node] = [left, right];
}

function preorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  answer += node;
  preorder(left);
  preorder(right);
}

function inorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  inorder(left);
  answer += node;
  inorder(right);
}

function postorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  postorder(left);
  postorder(right);
  answer += node;
}

preorder("A");
answer += "\n";
inorder("A");
answer += "\n";
postorder("A");
answer += "\n";

console.log(answer);
