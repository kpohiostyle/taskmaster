import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService {
    addList(listData, taskCount) {
        ProxyState.lists = [...ProxyState.lists, new List(listData.name, listData.color)]
        saveState()
    }

    deleteList(id) {
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
        saveState()
    }
}

export const listsService = new ListsService();

