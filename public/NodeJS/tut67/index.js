const http=require('http');
const fs=require('fs');

const hostname='127.0.0.1';
const port=3000;

// Need to change the folder(via cd) in terminal as it would be set to webdev folder initially
const home=fs.readFileSync('index.html',"utf-8");
const about=fs.readFileSync('about.html',"utf-8");
const contact=fs.readFileSync('contact.html',"utf-8");
const services=fs.readFileSync('services.html',"utf-8");

const server=http.createServer((req,res)=>{
    url=req.url;
    // console.log(req.url);

    res.writeHead(200,{'Content-type':'text/html'});
    // res.end(home);

    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
})

server.listen(port,hostname,()=>{
    console.log(`Server is currently running at http://${hostname}:${port}/`);
})