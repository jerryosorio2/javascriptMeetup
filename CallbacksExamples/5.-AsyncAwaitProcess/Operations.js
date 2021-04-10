class Operations {

    sleepTime(ms) {
        return new Promise(function(resolve) {
            setTimeout(resolve, ms)
        });
    }

    async processOne (){
        console.log("\n\t Executing process 1");
        await this.sleepTime(2000);
        return "\t -> Process 1 executed";    
    }

    async processTwo () {
        console.log("\n\t Executing process 2");
        await this.sleepTime(2000);
        return "\t -> Process 2 executed";  
    }

    async processThree () {
        console.log("\n\t Executing process 3");
        await this.sleepTime(2000);
        return "\t -> Process 3 executed";  
    }

    async processFour () {
        console.log("\n\t Executing process 4");
        await this.sleepTime(2000);
        throw new Error ("\t -> Failed when executing process 4")
    }
}

export default new Operations()