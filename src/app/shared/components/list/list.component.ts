import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() todos: ToDo[];
  constructor() {}

  ngOnInit(): void {}

  onCompleted(pTodo: ToDo) {
    pTodo.completed = !pTodo.completed;
  }
  onDeleteTask(i) {
    this.todos.splice(i, 1);
  }
}
