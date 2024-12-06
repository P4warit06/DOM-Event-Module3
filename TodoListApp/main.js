import todoManagement from './lib/todoManagement.js'
import {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone,
} from './UI/todoListUI.js'
import {
  addTodoHandler,
  notDoneButtonHandler,
} from './eventHandler/eventController.js'
showNumberOfDone(todoManagement.getNumberOfDone)
showNumberOfNotDone(todoManagement.getNumberOfNotDone)
const addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', addTodoHandler)
const input = document.querySelector('input')
input.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    addTodoHandler()
  }
})
  