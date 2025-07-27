// console.log("Heloo guyuss !!")

// const catMe = require('cat-me');
// console.log(catMe())


// --> Using http module
const http = require('http');

const server = http.createServer((req , res)=>{
    res.write("Hello from the server !!");
    res.end();
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})
