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

// Complete the repeatedString function below.


function main() {

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let numOfString = 0;
    let numOfA = 0;
    let arr = [];

    for(let elmn of s){
        numOfString++;
        
        if(elmn === 'a'){
            numOfA++;
        }
    }

    let divide = parseInt(n/numOfString);
    let remaining = n%numOfString;

    let temp = [];
    for(let i=0; i<s.length; i++){
        arr[i] = s[i];
        temp[i] = s[i];
    }

    for(let i=0; i<divide-1; i++){
        arr = arr.concat(temp);
    }
    let add = [];
    if(remaining > 0){
        for(let i=0; i<remaining; i++){
            add[i] = arr[i];
        }
        arr = arr.concat(add);  
    }

    let totalNumOfA = 0;
    for(let elmn of arr){
        if(elmn === 'a'){
            totalNumOfA++;
        }
    }

    console.log(totalNumOfA);
}

