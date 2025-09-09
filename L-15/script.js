let piPowerE = Math.pow(Math.PI, Math.E);
console.log("π^e =", piPowerE);

let sqrtValue = Math.sqrt(piPowerE);
console.log("Square root =", sqrtValue);

console.log("Rounded =", Math.round(sqrtValue));
console.log("Ceil =", Math.ceil(sqrtValue));
console.log("Floor =", Math.floor(sqrtValue));
console.log("Trunc =", Math.trunc(sqrtValue));

console.log("Natural log (log) =", Math.log(sqrtValue));
console.log("Log base 2 (log2) =", Math.log2(sqrtValue));
console.log("Log base 10 (log10) =", Math.log10(sqrtValue));

let randomNum = Math.random() * 200 - 100;
console.log("Random number =", randomNum);

console.log("Absolute value =", Math.abs(randomNum));
console.log("Sign =", Math.sign(randomNum));
console.log("Cosine =", Math.cos(randomNum));
console.log("Sine =", Math.sin(randomNum));

let minimum = Math.min(piPowerE, sqrtValue, randomNum);
let maximum = Math.max(piPowerE, sqrtValue, randomNum);
console.log("Minimum =", minimum);
console.log("Maximum =", maximum);
