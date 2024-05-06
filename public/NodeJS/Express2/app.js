const express=require('express')
const path=require('path')
const hostname='127.0.0.1';
const port=80;

const app=express();


/*Static files are those files that clients download as they are from the server(like images etc.)*/

app.use('/static',express.static('public'));// For serving static files
// shows just the javascript of file index.js
//TO OPEN: do localhost/static/index.js or whatever file you want to access in public directory

/* Template engine helps us to create an HTML template with minimal code. Also, it can inject data into HTML template at client side and produce the final HTML*/

app.set('view engine','pug');// Set the template engine as pug
app.set('views',path.join(__dirname,'views'));// Set the views folder(aka templates folder)

// demo.pug Endpoint
app.get('/demo',(req,res)=>{
    res.status(200).render('demo.pug', { title: 'Pug Engine', message: 'Hello there! We set up this page using Pug templating engine' })
});

// OTHER ENDPOINTS
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/about',(req,res)=>{
    res.send('This is the about page using express');
})

app.post('/about',(req,res)=>{
    res.send('This is the about page using express via POST REQUEST');
})

app.get('/error',(req,res)=>{
    // res.statusCode=404;
    // res.send("Page not found");

    res.status(404).send("Page not found");
})

// STARTING THE SERVER
app.listen(port,hostname,()=>{
    console.log(`Application started successfully on http://${hostname}:${port}/`);
})