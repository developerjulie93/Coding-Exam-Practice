'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.

function main() {
    const n = parseInt(readLine(), 10);
    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let pair = 0;
    let unpaired = [];

    for(let elmn of ar){
        if(unpaired[elmn]){
            unpaired[elmn]++;
            if(unpaired[elmn] % 2 ==0){
                pair++;
            }
        }
        else{
            unpaired[elmn] = 1;
        }
    }
    console.log(pair);
}
