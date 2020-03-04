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

    for(let elmn of s){
        numOfString++;
        if(elmn === 'a'){
            numOfA++;
        }
    }
    
    let arr = [];
    let divide = parseInt(n/numOfString);
    let remaining = n%numOfString;

    for(let i=0; i<s.length; i++){
        arr[i] = s[i];
    }
    let plus = 0;
    if(remaining > 0){
        arr = arr.slice(0, remaining);
        for(let elmn of arr){
            if(elmn === 'a'){
                plus++;
            }
        }
    }
    let totalNumOfA = divide * numOfA + plus; 
    console.log(totalNumOfA);

}
