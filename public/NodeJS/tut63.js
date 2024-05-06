// Either just simply use code runner OR to run this on terminal do: node .\tut63.js

const http = require('http');//https is a Core Module

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');

    res.setHeader('Content-Type','text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pseudo-Selectors & more designing</title>
    
        <style>
            .container{
                border:2px solid red;
                background-color: plum;
                padding:10px;
                margin:34px auto;
                width:666px;
            }
            #cont1{
    
            }
            .btn{
                background-color:rgb(232, 93, 93);
                padding:6px;
                border:2px solid black;
                cursor:pointer;
                font-size:15px;
                font-weight: bold;
                border-radius:3px;
            }
            .btn:hover{
                color:rgba(133, 186, 28, 0.997);
                background-color: rgb(232, 120, 120);
                border:2px solid black;
            }
            a{
                text-decoration: none;
                color:rgb(33, 61, 118);
            }
            a:hover{
                color:blue;
            }
            a:visited{
                color:yellow;
            }
            a:active{
                color:darkcyan;
            }
        </style>
    </head>
    <body>
        <div class="container" id="cont1">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempore eaque ipsum doloremque alias, molestias, quam doloribus labore dolorem, nobis numquam.</p>
    
            <a href="https:www.typing.com" class="btn">Read more...</a>
            <button class="btn">Contact us:</button>
        </div>
    </body>
    </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});//creates a server:127.0.0.1(no live server required) which can be opened in chrome via ctrl+click

// to quit server: ctrl+c
