// Immediately Invoked Function Expressions (IIFE)

// named IIFE
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // remember to put semicolon after IIFe when second IIFE funtion is stated otherwise shows error



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')