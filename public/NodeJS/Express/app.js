const express=require('express')

const app=express();

const hostname='127.0.0.1';
const port=80;

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

app.listen(port,hostname,()=>{
    console.log(`Application started successfully on http://${hostname}:${port}/`);
})