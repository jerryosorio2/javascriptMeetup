//CallBacks Example

import Operations from './Operations/Operations.js'

function executeProcess(){
    
    Operations.processOne(function(error, result){
        if(error){
            console.log(error.message);
        } else {
            console.log(result);
            Operations.processTwo(function(error, result){
                if(error){
                    console.log(error.message);
                }
                else {
                    console.log(result);
                    Operations.processThree (function(error, result) {
                        if(error){
                            console.log(error.message);
                        } else {
                            console.log(result);
                            Operations.processFour (function (error, result){
                                if(error){
                                    console.log(error.message);
                                }
                                else {
                                    console.log(result);
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

executeProcess();