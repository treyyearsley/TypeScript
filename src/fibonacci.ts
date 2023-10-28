const fibonacci = (input: number): number => {
    if (input < 1) return 0;//if statement that will start the fibonacci sequence.
    if (input < 2) return 1;
    return fibonacci(input - 2) + fibonacci(input - 1);//complete fibonacci function based on input.
}
// The fibonacci funtion written to the console with the first ten numbers
console.log("The first ten numbers of the Fibonacci sequence are:")
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));


