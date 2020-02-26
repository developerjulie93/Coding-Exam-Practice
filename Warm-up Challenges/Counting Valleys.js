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

// Complete the countingValleys function below.


function main() {
    const n = parseInt(readLine(), 10);

    const s = readLine();

    let height = 0;
    let seaLevel = 0;
    let checkHeight = 0;
    let checkValley = true;

    for(let h of s){
        if(h === 'U'){
            height++;
            if(height == seaLevel){
                checkValley = true;
            }
        }
        if(h === 'D'){
            height--;
            if(height < seaLevel && checkValley == true){
                checkValley = false;
                checkHeight++;
            }
        }
    }

    console.log(checkHeight);
}
