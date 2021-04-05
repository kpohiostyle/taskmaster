import ListsController from "./Controllers/ListsController.js"
import TasksController from "./Controllers/TasksController.js";

class App {
  // tasksController = new TasksController();
  listsController = new ListsController();
  tasksController = new TasksController();

}

window["app"] = new App();
