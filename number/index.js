let str2 = '';
for (var x = 0; x <= 20; x++) {
    if (x === 0) {
        str2 += x + " is even number." + '\n';
    }
    else if (x % 2 === 0) {
        str2 += x + " is even number." + '\n';
    }
    else {
        str2 += x + " is odd number." + '\n';
    }
}
console.log(str2);