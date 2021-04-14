class Operations {
    
    constructor(){
        console.log("Constructor Operations");
    }

    add(a,b){
        return a+b;
    }

    substract(a,b){
        return a-b;
    }

    multiply(a,b){
        return a*b;
    }

    divide(a,b){
        return a/b;
    }
}

export default new Operations();