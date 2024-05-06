const express=require('express')
const path=require('path')
const fs=require('fs')
const hostname='127.0.0.1';
const port=80;

const app=express();

// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('public'));//For serving static files
app.use(express.urlencoded())// helps send form data to express

// PUG SPECIFIC STUFF
app.set('view engine','pug')//Set the template engine as pug
app.set('views',path.join(__dirname,'views'))//set the views directory

// ENDPOINTS
app.get('/',(req,res)=>{
    let name='Atlas Gym'
    let msg='Get premium membership for $69-Hurry fill this form now'
    const params={'title':name,'message_head':'Welcome to '+name,'message_body':msg}
    res.status(200).render('index.pug',params)//now as we're using pug instead of .send() we can also use render()
})

app.post('/',(req,res)=>{
    // console.log(req.body);

    let name=req.body.name;//these come from "name" of form not the id
    let age=req.body.age;
    let sex=req.body.gender;
    let review=req.body.review;

    let str=`Name of client is ${name}\nAge of client is ${age}\nGender of client is ${sex}\nClient review: ${review}\n\n`
    

    fs.appendFileSync('output.txt',str)

    const params={"message":"Your form has been submitted successfully"}
    res.status(200).render('index.pug',params);
})

// STARTING THE SERVER
app.listen(port,hostname,()=>{
    console.log(`Application started successfully on http://${hostname}:${port}/`);
})