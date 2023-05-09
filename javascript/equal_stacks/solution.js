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
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 */

function equalStacks(h1, h2, h3) {
    let h1Sum = h1.reduce((acc, val) => acc + val, 0)
    let h2Sum = h2.reduce((acc, val) => acc + val, 0)
    let h3Sum = h3.reduce((acc, val) => acc + val, 0)
    let smallest = Math.min(h1Sum, h2Sum, h3Sum);
    while (h1Sum !== smallest || h2Sum !== smallest || h3Sum !== smallest) {
        smallest = Math.min(h1Sum, h2Sum, h3Sum);
        if (smallest < h1Sum) {
            h1Sum -= h1.shift()
        }

        if (smallest < h2Sum) {
            h2Sum -= h2.shift()
        }
        
        if (smallest < h3Sum) {
            h3Sum -= h3.shift()
        }
    }
    return h1Sum
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n1 = parseInt(firstMultipleInput[0], 10);

    const n2 = parseInt(firstMultipleInput[1], 10);

    const n3 = parseInt(firstMultipleInput[2], 10);

    const h1 = readLine().replace(/\s+$/g, '').split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().replace(/\s+$/g, '').split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().replace(/\s+$/g, '').split(' ').map(h3Temp => parseInt(h3Temp, 10));

    const result = equalStacks(h1, h2, h3);

    ws.write(result + '\n');

    ws.end();
}
