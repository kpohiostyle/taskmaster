import { tasksService } from "../Services/TasksService.js";





//Public
export default class TasksController {

    addTask(listId) {
        window.event.preventDefault()
        let form = window.event.target
        let taskData = {
            name: form['name'].value,
            listId: listId,
        }
        tasksService.addTask(taskData)
        form.reset()
    }

    deleteTask(id, listId) {
        let con = confirm("Press Ok to confirm deletion of your task")
        if (con) {
            tasksService.deleteTask(id, listId)
        } else {
            ''
        }


    }
    checkedBox(bool, id) {
        tasksService.checkedBox(bool, id)
    }

}
