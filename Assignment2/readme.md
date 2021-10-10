# Assignment-2

# 1. Create functions for the Calculator class that can do the following:
Add two numbers.
Subtract two numbers.
Multiply two numbers.
Divide two numbers.

    Examples:
        var calculator = new Calculator()

        calculator.add(10, 5) ➞ 15

        calculator.subtract(10, 5) ➞ 5

        calculator.multiply(10, 5) ➞ 50

        calculator.divide(10, 5) ➞ 2

Notes:
The functions should return the result of the calculation.






# 2.  
The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example,      50,000€). You send a bill to your spouse for the difference you lost.
Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

Examples:
    calculateDifference({ "baseball bat": 20 }, 5) ➞ 15

    calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11

    calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1

Notes:
The object will always contain items (no empty objects).
The sum of the items will always be greater than the limit.






# 3. code fixing
I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

Here is my code:
        function flatten(arr) {
        arr2 = [];
        for (let i = 0; i < arr.length; i++) {
            arr2.concat(arr[i]);
        }
        return arr2;
        }

But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

Examples:
        flatten([[1, 2], [3, 4]]) ➞ []
        // Expected: [1, 2, 3, 4]

        flatten([["a", "b"], ["c", "d"]]) ➞ []
        // Expected: ["a", "b", "c", "d"]

        flatten([[true, false], [false, false]]) ➞ []
        // Expected: [true, false, false, false]








# 4.
Write a function that will takes 3 arguments (count, time, callback function), it will run callback function (given in parameter)  for count (given in parameter) times but the interval between each running time will  be time (given in parameter).






# 5. What will be output of the following code and why?

        function myFunc() {
        setTimeout(() => console.log("TimeOut 1"), 0);
        Promise.resolve().then(() => console.log("Promise 1"));
        const promise = Promise.resolve();
        setTimeout(() => console.log("TimeOut 2"), 0);
        console.log("First Func");
        setTimeout(() => promise.then(() => console.log("Promise 2")), 0);
        }
        
        myFunc();
