let num = 266219;
let string = String(num);
let multi = 1;
let power = 3;
let resultPower;
let stringResultPower;

for (let i = 0; i < string.length; i++) {
   multi = multi * Number(string[i]);
};

console.log(multi);

resultPower = multi ** power;
console.log(resultPower);

stringResultPower = String(resultPower);

console.log(stringResultPower.substr(0, 2));