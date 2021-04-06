//Synchronous Execution - Simple Operations

import SimpleOperations from './Operations/SimpleOperations.js'

function executeProcess(){
    SimpleOperations.processOne();
    SimpleOperations.processTwo();
    SimpleOperations.processThree();
    SimpleOperations.processFour();
}

executeProcess();