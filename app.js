const argv = require('./config/yargs').argv;
const colors = require('colors');
const { create, getTodos, update, deleteToDo } = require('./to-do/to-do');

let command = argv._[0];

switch (command) {
  case 'create':
    create(argv.description);
    break;

  case 'list':
    let toDos = getTodos();
    toDos.forEach(toDo => {
      console.log('====== To Do ======'.green);
      console.log(toDo.description);
      console.log('Estado: ' + toDo.complete);
      console.log('==================='.green);
    });
    break;

  case 'update':
    let updated = update(argv.description, argv.complete);
    if (updated) {
      console.log('Tarea actualizada.');
    } else {
      console.log('No se logro actualizar.');
    }
    break;

  case 'delete':
    let todoDeleted = deleteToDo(argv.description);
    if (todoDeleted) {
      console.log(todoDeleted);
    } else {
      console.log('No se logro borrar el todo');
    }
    break;

  default:
    console.log('Comando invalido');
    break;
}