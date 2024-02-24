// function matchingStrings (strings, queries) {

//     const result = [];

//     queries.forEach((c) => {

//         let count = 0;

//         strings.forEach((element) => {

//             if (c === element) {

//                 count += 1;

//             }
//         });
//         result.push(count);

//     });
//     return result;
// }

// let res = matchingStrings(["aba","baba","aba","xzxb"], ["aba","xzxb","ab"])

// console.log(res);

function matchingStrings(strings, queries) {
    // Create an empty object to store the counts of each element in the 'strings' array.
    const countMap = {};
    
    // Iterate through each element in the 'strings' array.
    strings.forEach(element => {
        // Use the element as a key in the countMap. If it doesn't exist, default to 0.
        // Increment the count for the current element in the countMap.
        countMap[element] = (countMap[element] || 0) + 1;
    });

    // Initialize an array to store the counts for each query.
    // Use the 'map' function to iterate through each element in the 'queries' array.
    const result = queries.map(query => countMap[query] || 0);

    // Return the array containing counts for each query.
    return result;
}

// Example usage:
// Call the matchingStrings function with two arrays as arguments.
let res = matchingStrings(["aba","baba","aba","xzxb"], ["aba","xzxb","ab"]);

// Print the result to the console.
console.log(res);

// Explanation:

// 1) The matchingStrings function takes two arrays, strings and queries, as parameters.
// 2) It initializes an empty object countMap to store the counts of each element in the strings array.
// 3) It uses the forEach method to iterate through each element in the strings array.
// 4) Inside the loop, it updates the count of each element in the countMap.
// 5) After counting the occurrences of each element in strings, it uses the map function to iterate through each element in the queries array.
// 6) For each element in queries, it retrieves its count from the countMap. If the element is not found, it defaults to 0.
// 7) The counts for each query are stored in the result array.
// 8) The function returns the result array, which contains the counts for each element in the queries array.
// 9) The example usage demonstrates calling the function with sample data and printing the result to the console.
