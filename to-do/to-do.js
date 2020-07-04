const fs = require('fs');

let toDoList = [];

const saveData = () => {
  let data = JSON.stringify(toDoList);

  fs.writeFile('db/data.json', data, err => {
    if (err) throw err;
    console.log('Data saved.')
  });
};

const loadData = () => {
  try {
    toDoList = require('../db/data.json');
  } catch (error) {
    toDoList = [];
  }
};

const create = desc => {
  loadData();

  let toDo = {
    description: desc,
    complete: false
  };

  toDoList.push(toDo);
  saveData();
  return toDo;
};

const getTodos = () => {
  loadData();
  return toDoList;
};

const update = (description, complete = true) => {
  loadData();
  let index = toDoList.findIndex(todo => todo.description == description);

  if (index >= 0) {
    toDoList[index].complete = complete;
    saveData();
    return true;
  } else {
    return false;
  }
};

const deleteToDo = description => {
  loadData();
  let index = toDoList.findIndex(todo => todo.description == description);

  if (index >= 0) {
    let todoDeleted = toDoList.splice(index, 1);
    saveData();
    return todoDeleted;
  } else {
    return false;
  }
}

module.exports = {
  create,
  getTodos,
  update,
  deleteToDo
}