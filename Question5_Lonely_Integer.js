function lonelyinteger(a){
    let res = 0
    a.forEach(n => res = res ^ n )
    return res
}

let nums = lonelyinteger([1,2,3,4,3,2,1])
console.log(nums);