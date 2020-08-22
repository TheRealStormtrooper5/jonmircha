/*console.log('Hola mundo');

const temp = setTimeout(() => {
    console.log('XD');
}, 4000);*/

/*
let hola =setTimeout(() => {
    console.log(new Date().toLocaleTimeString());
    
}, 2000);

clearTimeout(hola);
*/
/*
function cuadradoCallback (value, callback){

    setTimeout(() => {
        
        callback(value, value * value)

    }, 0 | Math.random() * 100);
    
}

cuadradoCallback(9, (value, result) => {
    console.log('inicia callback');
    console.log(`${value} \n ${result}`);
});
*/

function cuadradoPromise (value){
    if(typeof value !== "number"){
       return Promise.reject('Eres bien noob bobolongo burda e sapo manito');
                       }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });             
        }, 0 | Math.random() * 100);
    });

}
/*cuadradoPromise('mamawebo').then((obj) => {console.log(obj)}).catch();
cuadradoPromise(7).then((obj) => {console.log(obj)}).catch();
cuadradoPromise(9).then((obj) => {console.log(obj)}).catch();
*/

async function funcionAsincronaDeclaraada (){
    try {
        console.log('hola');

        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

    } catch (err) {
        
    }
}
funcionAsincronaDeclaraada();