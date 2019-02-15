function dectobin(N){
    if(typeof N !== 'number'){
        return 'Expected paramete \'N\' to be a number '+ typeof N + ' given';
    }
    return Number(Number(N).toString(2));
}