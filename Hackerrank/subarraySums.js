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
 * Complete the 'findSum' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numbers
 *  2. 2D_INTEGER_ARRAY queries
 */

function findSum(numbers, queries) {
    // Write your code here
    const n = numbers.length;
    const prefixSum = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + numbers[i - 1];
    }

    const zeroCountPrefix = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        zeroCountPrefix[i] = zeroCountPrefix[i - 1] + (numbers[i - 1] === 0 ? 1 : 0);
    }

    let results = [];
    queries.forEach(([l, r, x]) => {
        const sum = prefixSum[r] - prefixSum[l - 1];
        const zeroCount = zeroCountPrefix[r] - zeroCountPrefix[l - 1];
        const result = sum + zeroCount * x;
        results.push(result);
    });

    return results;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const numbersCount = parseInt(readLine().trim(), 10);

    let numbers = [];

    for (let i = 0; i < numbersCount; i++) {
        const numbersItem = parseInt(readLine().trim(), 10);
        numbers.push(numbersItem);
    }

    const queriesRows = parseInt(readLine().trim(), 10);

    const queriesColumns = parseInt(readLine().trim(), 10);

    let queries = Array(queriesRows);

    for (let i = 0; i < queriesRows; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = findSum(numbers, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
