'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let minSwap = 0;
    let chaos = false;
    for(let i=0; i<q.length; i++){
        if(Math.abs(q.indexOf(q[i])-q[i]) == 2){
            minSwap++;
            }
        if(Math.abs(q.indexOf(q[i])-q[i]) == 3){
            minSwap = minSwap + 2;
            }
        if(Math.abs(q.indexOf(q[i])-q[i]) > 3){
            chaos = true;
            console.log("Too chaotic");
            break;
        }
    }
    if(!chaos){
        console.log(minSwap);

    }
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
