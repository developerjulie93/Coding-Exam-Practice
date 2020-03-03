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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {


}

function main() {

    const n = parseInt(readLine(), 10);
    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let check = 0;
    let checkZeroNum = 0;
    for(let num of c){
        if(num == 0){
            check++;
            checkZeroNum++;
            if(checkZeroNum == 3){
                check--;
                checkZeroNum = 1;
            }
        }
        if(num == 1){
            checkZeroNum = 0;
        }
    }
    console.log(check-1);
}
