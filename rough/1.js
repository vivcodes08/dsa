const prompt=require('prompt-sync')({ sigint: true })


let a= [1,2,[3,4,5],7,8,[10,11],[12]]

let final=[]

for ( let i in a){
    if(Array.isArray(a[i])){
        final.push(...a[i])
    }else{
        final.push(a[i])
    }
}
console.log(final)
// let reverse=(word)=>{
//     let reverse= "";
//     for( let i=word.length -1; i>=0; i-- ){
//         reverse+=word[i];
//     }
//     return reverse;
// }

// let wordsArr=str.split(" ")

// let reverseSentence="";

// wordsArr.forEach((word)=>{
//     reverseSentence+=" " + reverse(word);
// })
// console.log(reverseSentence);