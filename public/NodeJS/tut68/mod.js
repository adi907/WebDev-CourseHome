console.log("This is module");

let square={
    area:function(side){
        return side*side;
    },

    perimeter:function(side){
        return console.log(`Perimeter of the square is: ${4*side} sq. units`);
    }
}
module.exports=square;