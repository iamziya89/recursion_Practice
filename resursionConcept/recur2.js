function x(num){
    console.log("Hellow world"+num);
    if (num<10){
        return x(num+1);
    }
}
x(0);