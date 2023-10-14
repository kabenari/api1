const fs = require("fs");
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`,(err,data)=>{
    console.log(`breed:${data}`);

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err,res)=>{                                   
        if (err) console.log("its a 404");                                   // error handling 
        console.log(res.body.message);
    });
})

