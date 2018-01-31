var i, a, b, c, max;

max = 1000000000000000000000;//work well till 20 digits

var d = Date.now();
console.log("here b4 for");
for (i = 1; i < max; i=i*10) {
    a = 1234 + 5678 + i;
    b = 1234 * 5678 + i;
    c = 1234 / 2 + i;
    console.log(i);
}
console.log("here after for");
console.log(Date.now() - d);