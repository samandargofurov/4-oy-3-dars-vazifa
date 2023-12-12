let a = 3;
let b = 5;
let c = 21;
let d = 4;

let sum = 1;

if (a % 3 == 0 || a % 7 == 0) {
    sum *= a;
}

if (b % 3 == 0 || b % 7 == 0) {
    sum *= b;
}

if (c % 3 == 0 || c % 7 == 0) {
    sum *= c;
}

if (d % 3 == 0 || d % 7 == 0) {
    sum *= d;
}

console.log(sum);