# Requiring and Exporting
The very first thing we want is to be able to export a function and use it in another page. For that, we can use the `require` method. Check out the lesson under *01-Require* for source materials.

It can be a good idea to start with an `export`. Defining an export is very simple.
```
exports.myName = "Peter";
```
You can put anything you want in an export: strings, numbers, objects, and even functions.
```
exports.seven = 7;
exports.car = {
    "make": "Chevrolet",
    "model": "Malibu",
    "year": 1992
}
exports.marco = function(){
    return "polo";
}
```

It can be easier to define the function separately.
```
exports.marco = marco;

function marco() {
    return "polo";
}
```