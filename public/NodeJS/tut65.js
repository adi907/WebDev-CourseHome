/* Synchronous or Blocking:
                         line-by-line execution
*/
const fs=require('fs');
let msg=fs.readFileSync('tut64.txt','utf-8');
console.log(msg);


/* Asynchronous or Non-blocking- 
                line-by-line execution not guranteed(code gets executed line-by-line, but its result speeds may vary and can produce output at any order)
                callbacks will fire
                {in below example: "Hello World" gets printed first, then the contents of the file bcz callback function only fired when readFile gets completed which takes time & by mean time "Hello World" gets printed then callback fired }
*/
const fs=require('fs');
fs.readFile('tut64.txt','utf-8',(err,data)=>{//no need of "const text=fs.readFile" here as it gets stored in data only{if correct}
    console.log(err,data);//if correct->data displayed,otherwise->error message
})
console.log("Hello world");
