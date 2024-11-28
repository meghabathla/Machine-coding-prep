Write a pollyfill for Memoisation
Given a function to memoization return a memoiztedFunc

const getSum= () =>{}; // call for 1 // call for 2  // call for 3
function myMemoization(func){
    let cache;
    
    return ()=>{
    }
}
const getSumMemo = myMemoization(getSum)



getSumMemo(1) // output: x
getSumMemo(1) // output: x
getSumMemo(2) // output: y
getSumMemo(3) // output: z
getSumMemo(2) // output: y