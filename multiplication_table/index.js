let str = '';
for (i = 0; i <= 9; i++) {
    for (j = 1; j <= i; j++) {
        str += i + "x" + j + "=" + (i * j) + " ";
    }
    str += '\n';
}
console.log(str);