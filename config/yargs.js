
const description = {
  alias: 'd',
  demand: true,
  desc: 'Descripción de la tarea que se quiere hacer.'
};
const complete = {
  alias: 'c',
  default: true,
  desc: 'Marca como completado o no la tarea.'
};

const argv = require('yargs')
  .command('create', 'Crea una tarea para hacer.', { description })
  .command('update', 'Actualiza una tarea.', { description, complete })
  .command('delete', 'Borra un todo.', { description })
  .help()
  .argv;

module.exports = {
  argv
}