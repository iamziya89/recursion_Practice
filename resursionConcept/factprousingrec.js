function fact(num){
    console.log(num)
    if(num>0){
        return num*fact(num-1);
    }
    else {
        return 1;
    }
}
console.log(fact(6))