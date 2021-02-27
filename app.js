// // this is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// // just a console log for ourselves.
// console.log(sum(7,3))

// // export the function to be used on other files 
// // (similar to the keyword `export` when using webpack)
// module.exports = { sum };
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromEuroToDollar(euro){
    var valueDollar=oneEuroIs["USD"]*euro;
    return valueDollar;
}
function fromDollarToYen(dollar){
    var valueYen=dollar*(oneEuroIs["JPY"]/oneEuroIs["USD"]);
    return valueYen;
}

function fromYentoPound(yen){
    var valuePound=yen*(oneEuroIs["GBP"]/oneEuroIs["JPY"]);
    return valuePound;
    
}

module.exports = { fromDollarToYen, fromYentoPound, fromEuroToDollar};