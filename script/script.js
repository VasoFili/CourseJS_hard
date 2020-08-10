const num = 266219;
const string = String(num);
const array = string.split("");

// let result = array.reduce(function (multi, current) {
//    return multi * current;
// }, 1);
// console.log(result);

const reducer = (multi, current) => multi * current;
console.log(array.reduce(reducer));

// const power = array.reduce(reducer) ** 3;
// alert(String(array.reduce(reducer) ** 3).substring(0, 2));

alert((String(array.reduce(reducer) ** 3).split("")).slice(0, 2));