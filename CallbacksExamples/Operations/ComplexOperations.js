class ComplexOperations {

    processOne (){
        setTimeout(function(){
            console.log("\n\t Executing process 1");
            console.log("\t -> Process 1 executed");
        }, 2000);
    }

    processTwo () {
        setTimeout(function(){
            console.log("\n\t Executing process 2");
            console.log("\t -> Process 2 executed");
        }, 1000);
    }

    processThree () {
        setTimeout(function(){
            console.log("\n\t Executing process 3");
            console.log("\t -> Process 3 executed");
        }, 2000);
    }

    processFour () {
        setTimeout(function(){
            console.log("\n\t Executing process 4");
            console.log("\t -> Process 4 executed");
        }, 500);
    }
}

export default new ComplexOperations()