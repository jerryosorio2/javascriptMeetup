import Operations from './Operations.js'

function executeProcess() {
    
    Operations.processOne()
    .then(function(result){
        console.log(result);
        return Operations.processTwo();
    })
    .then(function(result){
        console.log(result);
        return Operations.processThree();
    })
    .then(function(result){
        console.log(result);
        return Operations.processFour();
    })
    .catch(function(error){
        console.log(error.message);
    })
}

executeProcess();