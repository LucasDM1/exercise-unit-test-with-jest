test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("150 dollar should be 15 987.4999Yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const Yens = fromDollarToYen(150)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    //const expected = 106.58333*150; 
    
    // this is the comparison for the unit test
    expect(Yens).toBe(15987.500000000002);
})

test("15000 Yen should be 93.82 pounds", function(){
    //import the function from app.js
    const { fromYentoPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYentoPound(15000)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    //const expected = 106.58333*150; 
    
    // this is the comparison for the unit test
    expect(pounds).toBe(93.82329945269741);
})