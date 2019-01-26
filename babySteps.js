let filterArray = process.argv.filter(e => Number(e));
let numberArray = filterArray.map(e => Number(e));
let sum = numberArray.reduce((total,number) => total + number);
console.log(sum);