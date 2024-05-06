const fs=require("fs");
const text=fs.readFileSync("tut64.txt","utf-8")
console.log(`Content of file read is ${text}`);

let newtext=text.replace("reading","replacing");
fs.writeFileSync("tut64_new.txt",newtext);

/* 3 types of modules:

i) CORE MODULES: Core modules include bare minimum functionalities of Node.js(bcz Node.js is a lightweight framework). These core modules are compiled into its binary distribution and load automatically when Node.js process starts. However, you need to import the core module first in order to use it in your application.

SOME CORE MODULES->
http: 	       http module includes classes, methods and events to create Node.js http server.
url: 	       url module includes methods for URL resolution and parsing.
querystring:   querystring module includes methods to deal with query string.
path:          path module includes methods to deal with file paths.
fs:            fs module includes classes, methods, and events to work with file I/O.
util: 	       util module includes utility functions useful for programmers.

Syntax to use: let/var/const fs=require('fs');// or use ""

ii) LOCAL MODULES: Written locally in our system

Syntax to use: let/var/const profile=require('./profile.js');// where profile.js is a local javascript file stored in our system

iii) THIRD PARTY MODULES:

*/