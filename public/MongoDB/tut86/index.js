const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/myStore',{useNewUrlParser:true,useUnifiedTopology:true});

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
  console.log("We are connected..")
});

// Creating a new Schema
const kittySchema = new mongoose.Schema({
  name: String
});

// Adding functions to the Model{always do this before compiling to model}
kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

// Compiling the Schema into a Model
const Kitten = mongoose.model('Kitten', kittySchema);

// Creating an Object of the model type Kitten
const kitten1 = new Kitten({ name: 'Billu' });
console.log(kitten1.name);
kitten1.speak();

// Saves the object kitten1 into a collection named "kittens"{plural of "Kitten"(1st argument passed in .model): does that by itself}
kitten1.save(function(err){
  if(err)return console.error(err);
});

const kitten2=new Kitten({name:'Tom'});
kitten2.save(function(err,k){
  if(err)return console.error(err);
  k.speak();
});

// Searching via Mongoose(without use mongo shell)
Kitten.find({name:"Tom"},function(err,x){
  if(err)return console.error(err);
   console.log('Successfly found Tom');
  //  x stores all the data(id,name,etc.) inside it
})


// Printing all kittens{doesnt work}
// const kittens = await Kitten.find();
// console.log(kittens);
