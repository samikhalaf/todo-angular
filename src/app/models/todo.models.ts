export class ToDo {
  task: string;
  completed: boolean;

  constructor(paramTask: string = '') {
    this.task = paramTask;
    this.completed = false;
  }
}
