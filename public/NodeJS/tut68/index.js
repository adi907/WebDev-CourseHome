console.log("This is index.js");

//Imported from Mod3.js(only imports a function, not a class)
const average=require('./mod3.js');
console.log(average([3,4]));//no need to write average.average here as we imported only the function(not an Object)

//Imported from Mod2.js(bad way written in mode2.js)
const mod=require('./mod2.js');
console.log(mod.avg([3,4]));//as mod2.js returns an object type. Of which we need to choose object's average property(reresented by avg in export)
console.log(mod.name);


//Imported from Mod.js(better way)
const square=require('./mod.js');

console.log(square.area(3));
