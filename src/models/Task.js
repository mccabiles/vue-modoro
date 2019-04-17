export default class Task {
  constructor(title) {
    this.title = title;
    this.id = new Date().getTime();
  }

  static getAllTasks() {
    const tasks = localStorage.getItem("tasks");
    if (tasks === null) return {};
    return JSON.parse(tasks);
  }

  static createTask(title) {
    let tasks = Task.getAllTasks();
    const newTask = new Task(title);
    tasks[newTask.id] = newTask;
    Task.saveTasks(tasks);
    return newTask;
  }

  static saveTasks(tasks) {
    const stringified = JSON.stringify(tasks);
    localStorage.setItem("tasks", stringified);
  }

  static delete(id) {
    let tasks = Task.getAllTasks();
    delete tasks[id];
    Task.saveTasks(tasks);
  }
}