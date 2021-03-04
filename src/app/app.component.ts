import { Component } from '@angular/core';
import { ToDo } from './models/todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toDoArray: ToDo[];

  constructor() {
    this.toDoArray = [];
  }

  onCreatedTodo($event) {
    this.toDoArray.push($event);
  }
}
