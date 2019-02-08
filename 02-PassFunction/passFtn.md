# Passing Functions
At this point, we assume that you're comfortable with functions and how they work. A function accepts an argument, and then can use that argument inside the function.

```js
function printArgs(x){
    console.log('Argument: ' + x);
}

printArgs(7);                           // Argument: 7
printArgs('foo');                       // Argument: foo
printArgs({"name":"Jim", "age": 30});   //Argument: { name: 'Jim', age: 30 }
```

From the printArgs example above, we know that we can call a function within a function - such as console.log. But what if we the function we want to call can have multiple behaviours?

We are able to pass a callback as a parameter. A callback behaves the same way as a function, because it is a function.
```js
//print the results of a function
function logger(callback){
    var message = callback();
    console.log(message);
}

function volkswagen(){
    return "beep-beep";
}

function packard(){
    return "a-WOOOOOOOOO-ga!"
}

logger(volkswagen);     // "beep-beep"
logger(packard);        // "a-WOOOOOOOOO-ga!"

```

Care must be taken when passing a callback into a function, however. Most of our time with functions has been in either defining or calling them, but now we wish to *reference* a function. 
```js
//define a function
function ping() {
    return 'pong';
}

//call a function
console.log(ping());    // 'pong'

//reference a function
console.log(ping);      // function ping() {return 'pong';}

```
Note the difference in calling and referencing a function. When calling, we type `ping()`, and when referencing we type `ping`. The difference is subtle, but the parentheses indicate that function is being called. You can quickly get yourself into trouble by calling the function when you mean to reference it, as in the below example:

```js
console.log('ping ' + pong());  // 'ping pong'
console.log('ping ' + pong);    // 'ping function ping() {return 'pong';}
```

So this is all well and good, but you might be wondering how you could send a function that accepts an argument as a callback. The short answer is that it's still just as simple as referencing the function.
```js
//return a whole number between 1 and X
function randomInt(x){
    return Math.floor(Math.random() * x) + 1;
}

function getResultsGood(callback, range){
    for (var i = 0; i < 3; i++){
        console.log(callback(range));
    }
}

function getResultsBad(callback){
    for (var i = 0; i < 3; i++){
        console.log(callback);
    }
}

//reference function
getResultsGood(randomInt, 10);      // 3, 9, 5

//call function
getResultsBad(randomInt(10))    // 3, 3, 3


```
So what happened here? In getResultsGood we pass in the randomInt function **reference** as well as the argument we'd like to call it with. However, in getResultsBad we **call** the randomInt function and pass the result in. When we pass a reference, we can call that function several times. However, when we call the function, we only have the result - in this case: 3.