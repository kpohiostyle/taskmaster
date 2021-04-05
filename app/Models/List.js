import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"


export default class List {
    constructor(name, color, id = generateId()) {
        this.id = id
        this.name = name
        this.color = color

    }

    get Template() {

        return `
        <div class="col-md-4">
        <div class="card shadow bg-white rounded">
            <div class="text-center text-white p-2 d-flex justify-content-between"
                style="background-color: ${this.color}">
                <h3>${this.name}</h3>
                <p>${this.CompletedTasks}/${this.TaskCount}</p>
                <i class="fas fa-times ml-2" onclick="app.listsController.deleteList('${this.id}')"></i>
            </div>
            <div class="p-3">
                <ul>
                    ${this.Tasks}
                </ul>
            </div>
            <form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
                <input type="text" name="name" id="name" class="form-control" placeholder="Task"
                    aria-describedby="helpId"  minlength="3" maxlength="50" required>
                <button type="submit" style="background-color: ${this.color}" class="btn btn-success" title='add task'><i class="fas fa-plus"></i></button>
            </form>
        </div>
    </div>
        `
    }

    get Tasks() {
        let tasks = ProxyState.tasks.filter(t => t.listId === this.id)
        let template = ''
        tasks.forEach(i => template += i.Template)
        return template
    }

    get TaskCount() {
        let taskCount = ProxyState.tasks.filter(t => t.listId === this.id)
        return taskCount.length
    }
    get CompletedTasks() {
        let completedTasks = ProxyState.tasks.filter(t => t.listId === this.id && t.checked == true)
        return completedTasks.length
    }


}
