import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState } from "../Utils/LocalStorage.js"


//Private
function _draw() {
    let lists = ProxyState.lists;
    let template = ''
    lists.forEach(v => template += v.Template)
    document.getElementById("lists").innerHTML = template
}

//Public
export default class ListsController {
    constructor() {
        ProxyState.on("lists", _draw);
        ProxyState.on('tasks', _draw);
        _draw()
        loadState()
    }

    addList() {
        window.event.preventDefault()
        let form = window.event.target
        let listData = {
            name: form['name'].value,
            color: form['favcolor'].value
        }
        listsService.addList(listData)
        // @ts-ignore
        form.reset()
    }

    deleteList(id) {
        let con = confirm("Press Ok to confirm deletion of your list")
        if (con) {
            listsService.deleteList(id)
        } else {
            ''
        }

    }

}