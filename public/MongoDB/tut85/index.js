
// METHOD-I (via Mongoose documentation)

// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/myStore');
//   console.log("Hi guys");
// }

// METHOD-II (via CodewithHarry)

// const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/myStore',{useNewUrlParser:true,useUnifiedTopology:true});

// var db=mongoose.connection;
// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',function(){
//   // we're connected!
//   console.log("We are connected..")
// });

// METHOD-III(via WebDevSimplified)

const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/myStore",()=>{
  console.log("Conncected successfully to database myStore");
},
e=>console.log(e)
)