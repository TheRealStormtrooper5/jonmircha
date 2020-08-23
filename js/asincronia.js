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
        }, 0 | Math.random() * 1110);
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


        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(6);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(7);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(8);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(9);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(10);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(11);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(12);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(13);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(14);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(15);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

    } catch (err) {
        console.lor(err);
    }
}
funcionAsincronaDeclaraada();