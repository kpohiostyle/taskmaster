import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor(name, listId, checked = false, id = generateId()) {
        this.id = id
        this.name = name
        this.listId = listId
        this.checked = checked
    }


    get Template() {
        return `
                <div class="col-12 input-group-text p-3">
                    <input type="checkbox" id = 'checkbox' onclick="app.tasksController.checkedBox(this.checked, '${this.id}')" ${this.checked ? 'checked' : ''} aria-label="Checkbox for following text input">
                    <li class="pr-5">${this.name} <i class="fas fa-times ml-2" onclick="app.tasksController.deleteTask
                    ('${this.id}')"></i></li>
                </div>                       
             `

    }
}


