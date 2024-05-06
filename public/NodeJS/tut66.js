const http=require('http');
const fs=require('fs');

const fileCode=fs.readFileSync('tut34.html',"utf-8");

const server=http.createServer((req,res)=>{
    // res.statusCode=200;
    // res.setHeader('Content-type','text/html');

    res.writeHead(200,{'Content-type':'text/html'});
    
    res.end(fileCode)
})

const port=80;//80 is the default port if no port number is mentioned in chrome address{need to mention a port address here in .js file}
const hostname='127.0.0.1';

server.listen(80,'127.0.0.1',()=>{
    console.log(`Server is running currently on http://${hostname}:${port}/`)
})