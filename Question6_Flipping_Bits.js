function flippingBits(n) {
    if (Array.isArray(n)) {
        return n.map(num => {
            let s = num.toString(2);
            let bits = s.padStart(32, '0');
            let convert = bits.split('').map((data) => {
                return data > 0 ? 0 : 1;
            }).join('');
            return parseInt(convert, 2);
        });
    } else {
        let s = n.toString(2);
        let bits = s.padStart(32, '0');
        let convert = bits.split('').map((data) => {
            return data > 0 ? 0 : 1;
        }).join('');
        return parseInt(convert, 2);
    }
}

// Example usage:
let soln = flippingBits([3, 2147483647, 1, 0]);
console.log(soln);

// Explaination
// Certainly! Let's break down the `flippingBits` function line by line:

// 1. `function flippingBits(n) {`: This declares the `flippingBits` function, which takes a parameter `n`.

// 2. `if (Array.isArray(n)) {`: This checks if `n` is an array using `Array.isArray()`. If true, it means `n` is an array.

// 3. `return n.map(num => {`: If `n` is an array, it uses the `map` function to iterate over each element (`num`) in the array.

// 4. `let s = num.toString(2);`: Converts each integer element `num` to its binary representation as a string.

// 5. `let bits = s.padStart(32, '0');`: Pads the binary string with leading zeros to ensure it is 32 bits long.

// 6. `let convert = bits.split('').map((data) => { return data > 0 ? 0 : 1; }).join('');`: Maps each bit in the binary string, flipping 0 to 1 and 1 to 0.

// 7. `return parseInt(convert, 2);`: Converts the flipped binary string back to an integer.

// 8. `});`: Closes the `map` function.

// 9. `} else {`: If `n` is not an array, it executes the following block.

// 10. `let s = n.toString(2);`: Converts the single integer `n` to its binary representation.

// 11. `let bits = s.padStart(32, '0');`: Pads the binary string with leading zeros to ensure it is 32 bits long.

// 12. `let convert = bits.split('').map((data) => { return data > 0 ? 0 : 1; }).join('');`: Maps each bit in the binary string, flipping 0 to 1 and 1 to 0.

// 13. `return parseInt(convert, 2);`: Converts the flipped binary string back to an integer.

// 14. `}`: Closes the `else` block.

// 15. `}`: Closes the entire function.

// 16. `let soln = flippingBits([3, 2147483647, 1, 0]);`: Calls the function with an array of integers.

// 17. `console.log(soln);`: Prints the result to the console.

// This function can handle both single integers and arrays of integers, applying the bit-flipping logic accordingly.