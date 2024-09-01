'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'longestSubarray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function longestSubarray(arr) {
    // Write your code here
    let start = 0;
    let maxLength = 0;
    let counts = new Map();

    for (let end = 0; end < arr.length; end++) {
        counts.set(arr[end], (counts.get(arr[end]) || 0) + 1);

        while (counts.size > 2 || !isValid(counts)) {
            counts.set(arr[start], counts.get(arr[start]) - 1);
            if (counts.get(arr[start]) === 0) {
                counts.delete(arr[start]);
            };
            start++;
        };
        maxLength = Math.max(maxLength, end - start + 1);
    };

    return maxLength;
};

function isValid(counts) {
    const keys = Array.from(counts.keys());
    if (keys.length === 1) return true;
    if (keys.length === 2) {
        const [a, b] = keys;
        return Math.abs(a - b) <= 1;
    };
    return false;
};


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }



    ws.write(result + '\n');

    ws.end();
}
