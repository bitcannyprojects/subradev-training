
function myFunc() {
    setTimeout(() => console.log("TimeOut 1"), 0);
    Promise.resolve().then(() => console.log("Promise 1"));
    const promise = Promise.resolve();
    setTimeout(() => console.log("TimeOut 2"), 0);
    console.log("First Func");
    setTimeout(() => promise.then(() => console.log("Promise 2")), 0);
}

myFunc();


/*
output:-
    First Func
    Promise 1
    TimeOut 1
    TimeOut 2
    Promise 2
*/

/* Reason:--
1. Global Execution Context will create and pushed inside the CallStack
2. Code will run line by line
3. myFunc will invoke and create an execution context and push inside the Callstack
4. Inside myFunc execution context
    i)   setTimeout() method will invoke and a Callback function will pass throw it and register inside the thread pool and process the function
    ii)  then Promise will invoke and a Callback function will  register inside the thread pool
    iii) next a constant type promise variable will initialized
    iv)  2nd setTimeout() method will invoke and a Callback function will again register inside the thread pool
*** v)   console.log() will call and it will print first inside the console as it just simply print/return a string not a heavy wep Api call like callbacks and promises
    vi)  3rd setTimeout() method will invoke and a Callback function will again register inside the thread pool

5) code ends inside myFunc and the function execution context will poped out
6) after function execution context the Global execution context will also poped out and the callStack will empty

    ---  when all callback function tasks will complete then all will moves to the event queue acoording to the time of completion
    ---  and
    ---  All Promises will  moves to the microtask queue
    ---  Event loop will then check the callstack and the queues and when the callstask will empty it will push the tasks inside the callstack

    output:-
    i)   "First Func"  print fisrt  -> simple console api call

    ii)  "promise 1"   print second -> stores inside the Microtask queue and it has the higher priority than the event queue

    iii) "TimeOut 1"   print third  -> No task left inside the microtask queue so event loop will start to push the task from event queue
                                    -> 1st task inside the event queue

    iv)  "TimeOut 2"   print fourth -> 2nd task inside the event queue

    v)   "Promise 2"   print fifth  -> Allthough it is a Promise But it is used inside a callback function
                                    -> 3rd task inside the event queue



*/