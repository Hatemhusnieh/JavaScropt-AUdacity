// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions("happy", function laugh(ha){
    var heh= "";
    for(var i=0; i<ha; i++){
        heh+="ha";
    }
    return heh+"!";
});
