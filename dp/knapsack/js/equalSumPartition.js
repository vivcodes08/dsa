// Dynamic Programming
// KnapSack Variation [Equal Sum Problem]

// given i/p
let arr = [2, 3, 4, 5];
let N = 4;

// expected o/p
// return true or false if there exists two subsets whose
// sum is equal

let sum = 0;
arr.forEach(element => sum += element);

let t = new Array(N + 1).fill(null).map(() => new Array(sum + 1).fill(-1));

// initializing the matrix
for (let i = 0; i <= N; i++) {
  for (let j = 0; j <= sum; j++) {
    if (i == 0) {
      t[i][j] = false;
    }
    if (j == 0) {
      t[i][j] = true;
    }
  }
}

// Take Reference from main.js
// Replace wt ---> arr
// Replace W -----> SUM
function subSetSum(arr, sum) {
  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j - arr[i - 1]] || t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }
  console.table(t);
  console.log("Is Possible :- ", t[N][sum]);
  return t[N][sum];
}

function equalSumPartition(arr, sum) {
  if (sum % 2 !== 0) return false;
  return subSetSum(arr, sum / 2);
}

equalSumPartition(arr, sum);
