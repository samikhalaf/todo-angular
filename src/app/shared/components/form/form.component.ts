import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/models/todo.models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() createdTodo: EventEmitter<ToDo>;

  newTodo: ToDo;

  constructor() {
    this.newTodo = new ToDo();
    this.createdTodo = new EventEmitter();
  }

  ngOnInit(): void {}

  addTodo() {
    this.createdTodo.emit(this.newTodo);
    this.newTodo = new ToDo();
  }
}
