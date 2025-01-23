

let val=[ 60, 100, 120 ]
let wt=[ 10, 20, 30 ]
const W=50
const N=3




function knapsack(wt,val,W,N){

    // base condition
    if( W == 0 || N == 0) return 0;

    if(wt[N-1] <= W){
        return Math.max(
            (val[N-1]+ knapsack(wt,val,W-wt[N-1],N-1)),
            (knapsack(wt,val,W,N-1))
        )
    }else{
        return knapsack(wt,val,W,N-1)
    }

}

const profit=knapsack(wt,val,W,N)


console.log("Max Profit: " + profit)
