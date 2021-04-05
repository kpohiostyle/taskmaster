import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";


class TasksService {
    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(i => i.id != id)
        saveState()

    }
    addTask(taskData) {
        ProxyState.tasks = [...ProxyState.tasks, new Task(taskData.name, taskData.listId)]
        ProxyState.tasks = ProxyState.tasks
        saveState()
    }

    checkedBox(bool, id) {
        ProxyState.tasks.find(t => t.id === id).checked = bool
        ProxyState.tasks = ProxyState.tasks
        saveState()
    }

}

export const tasksService = new TasksService();