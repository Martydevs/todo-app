import { Component, Input } from '@angular/core';
import { ToDo } from '../../interfaces/todo-list.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todoList: ToDo[] = [];

  constructor() {}

  removeTodo(): void {}
}
