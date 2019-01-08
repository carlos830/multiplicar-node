//requires
//const fs = require('fs'); //estan nativos de node
//const fs = require('express'); hay que instalar
//const fs = require('./fs'); son creados por nosotros
const argv = require('./config/yargs.js').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
        break;
}

//console.log(argv);

//et base = 5;
//let argv2 = process.argv;
//console.log(argv.base);

//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(process.argb);