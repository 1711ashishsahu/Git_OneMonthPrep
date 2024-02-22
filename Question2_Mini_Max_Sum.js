function miniMaxSum(arr){
    console.log(arr);
    arr.sort()
    console.log(arr);
    let min = 0;
    let max = 0;
    for(let i = 0; i < arr.length-1; i++){
        // min += arr[i]
        min = min + arr[i]
        console.log("min is", min)
    }
    for(let j = 1; j < arr.length; j++){
        // max += arr[j]
        max = max + arr[j]
        console.log("max is", max)
    }
    console.log(min, max);
}

miniMaxSum([4, 2, 1, 5, 3])


// const months = [4,2,1,5,3];
// // months.sort((a,b) => a-b);
// months.sort()
// console.log(months);