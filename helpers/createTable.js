
const fileSystem = require('fs');
const colors = require('colors');
const createFiletest = async (tabla, error) => {
    console.log('***************************');
    console.log(`*** Tabla del ${tabla} ****`);
    console.log('***************************');

    let data = '';
    for(i=1; i<=10; i ++){
        console.log(`${tabla}`, `*`.red, `${i} = ${ tabla * i}\n`.green);
        data += `${tabla} * ${i} = ${ tabla * i}\n`;
    }

    try{
        await(fileSystem.writeFileSync(`Tabla del ${tabla}.txt`, data)) ;
        return `creamos la tabla del ${tabla}`;
    }catch(e){
        throw `Se produjo el error ${e}`;
    }


}


module.exports = {
     createFiletest
}

