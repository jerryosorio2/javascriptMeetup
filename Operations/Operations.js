class Operations {

    processOne (callBack){
        setTimeout(function(){
            console.log("\n\t Executing process 1");
            callBack(null, "\t -> Process 1 executed");
        }, 2000);
    }

    processTwo (callBack) {
        setTimeout(function(){
            console.log("\n\t Executing process 2");
            callBack(null, "\t -> Process 2 executed");
        }, 1000);
    }

    processThree (callBack) {
        setTimeout(function(){
            console.log("\n\t Executing process 3");
            callBack(null, "\t -> Process 3 executed");
        }, 2000);
    }

    processFour (callBack) {
        setTimeout(function(){
            console.log("\n\t Executing process 4");
            const error = new Error();
            error.message = "\t -> Failed when executing process 4";
            callBack(error, "\t Process 4 executed");
        }, 500);
    }
}

export default new Operations()