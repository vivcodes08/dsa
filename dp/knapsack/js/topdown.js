//! Knapsack Memoized Code

let val=[ 60, 100, 120 ]
let wt=[ 4, 2, 3 ]
const W=7
const N=3

// Createing a 2D Matrix
let t = new Array(N + 1).fill(null).map(() => new Array(W + 1).fill(-1));

// intializing the matrix

 for( let i=0 ;i<=N ;i++){
        for ( let j=0 ;j<=W ;j++){
            
            if( i == 0 || j ==0 ) {
                t[i][j]=0;
            }
        }
    }


    // Take Reference from main.js
    // Replace N----> i
    // Replace W---->j
    function knapsack(wt,val,W,N){
        let t = new Array(W + 1).fill(0);
        for (let i=1 ;i<N+1 ; i++){
            for(let j=1 ;j<W+1 ;j++){

                if(wt[i-1] <= W){
                    console.log("1st",val[i-1]+ t[i-1][j-wt[i-1]])
                    console.log("2nd",t[i-1][j])
                   t[i][j]=Math.max(
                    (val[i-1]+ t[i-1][j-wt[i-1]]),
                    (t[i-1][j])
                   ) 

                }else{
                    t[i][j]=t[i-1][j]
                }
            }
        }
    
    }

knapsack(wt,val,W,N)

console.log(t)
console.log("Max Profit :- " ,t[N][W])
