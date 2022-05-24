function factorial(n){
    if(n==0 || n == 1){
        return 1
    }else{
        return n*factorial(n-1);
    }
}
module.exports = factorial

// Pair Programming Partner is Nina Kenyonyozi Bwengye