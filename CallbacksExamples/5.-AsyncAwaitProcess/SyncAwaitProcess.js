import Operations from './Operations.js'

async function executeProcess(){
    
    try{
        let resultOperation1 = await Operations.processOne();
        console.log(resultOperation1);
        
        let resultOperation2 = await Operations.processTwo();
        console.log(resultOperation2);
        
        let resultOperation3 = await Operations.processThree();
        console.log(resultOperation3);

        let resultOperation4 = await Operations.processFour();
        console.log(resultOperation4);

    } catch(e){
        console.log(e.message);
    }
}

executeProcess();