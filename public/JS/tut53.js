console.log("This is tutorial 53");

let name="Adi";
let name1="Anu";
let name2="Aryan";
let name3="Divij";

function greet(name="bro"){//Default parameter(if no other parameter is passed, given parameter("bro")is taken)
    console.log("Good Morning, "+ name+". Hope you have a great day!");
}

greet(name);
greet(name1);
greet(name2);
greet(name3);
greet()

function sum(a=0,b=0,c=0){
    let d = a + b + c;
    return d;
    // console.log("Good morning");This line is unreachable(will never get executed)
}

let returnVal = sum(1,2,3);
console.log(returnVal)

// console.log(sum(1,2,3));ALTERNATE WAY
returnVal=sum();
console.log(returnVal)

function min(a,b){
    if(a>b){
        console.log(b+" is smaller than "+a);
        return b;
    }else{
        console.log(a+" is smaller than "+b);
        return a;
    }
}

function max(a,b){
    if(a>b){
        console.log(a+" is greater than "+b);
        return a;
    }else{
        console.log(b+" is greater than "+a);
        return b;
    }
}

console.log(min(4,7));

returnVal=max(5,8)
console.log(returnVal);
