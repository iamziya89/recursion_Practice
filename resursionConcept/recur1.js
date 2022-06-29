// function x(){
//     console.log("Hello World");
//     return x();
// }
// x();

function x(){
    console.log("Hello World");
    return setTimeout(x,1000)
}
x();