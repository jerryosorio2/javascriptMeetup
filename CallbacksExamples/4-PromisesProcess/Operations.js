class Operations {

    processOne (){
        return new Promise ((resolve, reject) => {
            setTimeout(function(){
                console.log("\n\t Executing process 1");
                resolve("\t -> Process 1 executed");
            }, 2000);
        });
    }

    processTwo () {
        return new Promise ((resolve, reject) => {
            setTimeout(function(){
                console.log("\n\t Executing process 2");
                resolve( "\t -> Process 2 executed");
            }, 1000);
        });
    }

    processThree () {
        return new Promise ((resolve, reject) => {
            setTimeout(function(){
                console.log("\n\t Executing process 3");
                resolve("\t -> Process 3 executed");
            }, 2000);
        });
    }

    processFour () {
        return new Promise ((resolve, reject) => {
            setTimeout(function(){
                console.log("\n\t Executing process 4");
                const error = new Error();
                error.message = "\t -> Failed when executing process 4";
                reject(error);
            }, 500);
        });
    }
}

export default new Operations()