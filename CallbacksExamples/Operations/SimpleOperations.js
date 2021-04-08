class SimpleOperations {

    processOne (){
        console.log("\n\t Executing process 1");
        console.log("\t -> Process 1 executed");
    }

    processTwo () {
        console.log("\n\t Executing process 2");
        console.log("\t -> Process 2 executed");
    }

    processThree () {
        console.log("\n\t Executing process 3");
        console.log("\t -> Process 3 executed");
    }

    processFour () {
        console.log("\n\t Executing process 4");
        console.log("\t -> Process 3 executed");
    }

}

export default new SimpleOperations()