// 1. Print odss 1-20
for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// 2. Decreasing Multiples of 3
for (var i = 100; i > 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// 3. Print the sequence 4, 2.5, 1, -0.5, -2, -3.5
for (var i = 4; i >= -3.5; i -= 1.5) {
    console.log(i);
}

// 4. Sigma, sum all values 1-00
var sum = 0
for (var i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum)

// 5. Factorial, multiple all values from 1-12
var product = 1
for (var i = 1; i <= 12; i++) {
    product *= i
}
console.log(product)