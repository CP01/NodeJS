var readline = require('readline');
var read = readline.createInterface({
input: process.stdin,
output: process.stdout
});
read.question("Enter value : " , function(answer){
console.log(answer*answer);
read.close();
});