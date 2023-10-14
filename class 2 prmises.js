const fs = require("fs");
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`,(err,data)=>{
    console.log(`breed:${data}`);

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then(res=>{
        if (err) console.log("its a 404");                                   // error handling 
        console.log(res.body.message);
    })
})











// well ab hum promisis sikhenge isme kya hota hain fn hame kind of promise karta hain ki value dega server self
// aur jab bhi value aegi in background retrival chalta rahega par jab bhi value aegi woh value return karega eahi kam 
// idhar get karta hain get ka kam hi hain promises return karna now hum isme .then use karenge is aur better banane ke lkiye
// aur eahi hame dhire dhire callback hell se bachaegi
