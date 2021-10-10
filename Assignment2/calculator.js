
/*---------problem------*/
// Create functions for the Calculator class that can do the following:
// 1. Add two numbers.
// 2. Subtract two numbers.
// 3. Multiply two numbers.
// 4. Divide two numbers.


class Calculator {

    add(a, b) {
        return a + b
    }

    subtract(a, b) {
        return a - b
    }

    multiply(a, b) {
        return a * b
    }

    divide(a, b) {
        return a / b
    }
}

let calculator = new Calculator()

console.log(
    calculator.add(10, 5),
    calculator.subtract(10, 5),
    calculator.multiply(10, 5),
    calculator.divide(10, 5)
);