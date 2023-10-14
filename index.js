const fs = require("fs");
const superagent = require('superagent');

const readfilepro = file =>{return new Promise((resolve,reject)=>{
    fs.readFile(file, (err,data)=>{
        if (err) reject('lol i cant find it');
        resolve(data);
    });
});
}

const getpic = async () =>{
    try {
        const data = await readfilepro(`${__dirname}/dog.txt`);
        console.log(`Breed: ${data}`);

        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/image/random`);
        console.log(res.body.message);

        await writeFilepro('dog-img.txt' ,res.body.message);
        console.log('random dog img is porinted');
    } catch (err) {
        console.log(err);
    }
}
getpic();

// readfilepro(`${__dirname}/dog.txt`)
//     .then(data =>{
//     console.log(`Breed : ${data}`); 
//     return superagent.get(`https://dog.ceo/api/breed/${data}/image/random`)
// })
//     .then(res =>{
//         if(err) return console.log(err.message);
//         console.log(res.body.message);

//         fs.writeFile('dog-img.txt' , res.body.message , err =>{
//             if(err) return console.log(err.message);
//             console.log('random dog image saved ');
//         });
//     })
//     .catch(err=>{
//         console.log(err.message);
//     });
