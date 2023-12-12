let a = 10;
let b = 5;
let c = 2;

let sum = 1;

if (a % 2 == 0 && a % 5 == 0) {
    sum *= a;
}

if (b % 2 == 0 && b % 5 == 0) {
    sum *= b;
}

if (c % 2 == 0 && c % 5 == 0) {
    sum *= c;
}

console.log(sum);