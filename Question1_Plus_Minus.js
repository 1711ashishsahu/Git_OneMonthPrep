function plusMinus(arr) {
    // Write your code here
    let positive_count = 0;
    let negative_count = 0;
    let zero_count = 0;
    console.log("*******");
    console.log(arr);
    console.log(arr.length)
    console.log("*******");
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positive_count++
            console.log(positive_count);
        }else if(arr[i] < 0){
            negative_count++
            console.log(negative_count);
        }else{
            zero_count++
            console.log(zero_count);
        }
    }
    let pos = (positive_count/arr.length).toFixed(6);
    let neg = (negative_count/arr.length).toFixed(6);
    let zero = (zero_count/arr.length).toFixed(6);
    console.log(pos)
    console.log(neg)
    console.log(zero)
}

plusMinus([-4, 3, -9, 0, 4, 1])