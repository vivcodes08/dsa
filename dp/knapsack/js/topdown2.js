//! Knapsack Code without Memoization

let val = [60, 100, 120];
let wt = [4, 2, 3];
const W = 7;
const N = 3;

// Create a 2D matrix for storing results
let t = new Array(N + 1).fill(null).map(() => new Array(W + 1).fill(0));

// Initialize the matrix
for (let i = 0; i <= N; i++) {
  for (let j = 0; j <= W; j++) {
    if (i === 0 || j === 0) {
      t[i][j] = 0;
    }
  }
}

// Solve the knapsack problem using nested loops
function knapsack(wt, val, W, N) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= W; j++) {
      if (wt[i - 1] <= j) {
        // If the item fits, take the maximum of including or excluding the item
        t[i][j] = Math.max(val[i - 1] + t[i - 1][j - wt[i - 1]], t[i - 1][j]);
      } else {
        // If the item doesn't fit, exclude it
        t[i][j] = t[i - 1][j];
      }
    }
  }
}

// Call the knapsack function
knapsack(wt, val, W, N);

console.log("Knapsack Table:");
console.table(t);
console.log("Max Profit:", t[N][W]);
