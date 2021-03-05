function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(num){
    var tri="";
    for(var i=1; i<=num; i++){
        tri+= makeLine(i);
    }
    return tri;
}

// test your code by uncommenting the following line
console.log(buildTriangle(100));
