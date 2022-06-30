// function y(num){
//     if(num>0){
//        console.log(num)
//        return y(num-1)
//     }
//     else{
//         return "Ziya";
//     }
// }
// y(5)

function y(num,fact){
    if(num>0){
       fact*=num;
       return y((num-1),fact);
    }
    else{
        return fact;
    }
}
console.log(y(5,1));