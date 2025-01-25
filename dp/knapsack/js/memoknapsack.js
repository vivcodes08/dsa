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

    function knapsack(wt,val,W,N){

        // base condition
        if( W == 0 || N == 0) return 0;

        // memorized returns
        if(t[N][W] != -1) return t[N][W];
    
        // before returning just update the matrix for future reuse
        if(wt[N-1] <= W){
            return t[N][W]=Math.max(
                (val[N-1]+ knapsack(wt,val,W-wt[N-1],N-1)),
                (knapsack(wt,val,W,N-1))
            )
        }else{
            return t[N][W]=knapsack(wt,val,W,N-1)
        }
    
    }

knapsack(wt,val,W,N)


console.log(t[N][W])
