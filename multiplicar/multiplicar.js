const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log('======================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('======================'.green);

    for (let x = 1; x <= limite; x++) {


        console.log(`${base}*${x} = ${base*x}`.red);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} =  ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limite ${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else {
                resolve(`tabla-${base}-limite ${limite}.txt`.green);
            }
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}