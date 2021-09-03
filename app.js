console.clear()

const {createFiletest} = require('./helpers/createTable');

const [, ,value='base=5'] = process.argv;

const tabla = value.split('=');




createFiletest(tabla[1])
.then(result => console.log(result))
.catch(erro => console.log(erro));