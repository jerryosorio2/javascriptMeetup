//Synchronous Execution - Complex operations

import ComplexOperations from './Operations/ComplexOperations.js'

function executeProcess(){
    let res = ComplexOperations.processOne();
    
    ComplexOperations.processTwo();
    ComplexOperations.processThree();
    ComplexOperations.processFour();
}

executeProcess();