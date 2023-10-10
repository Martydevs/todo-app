import { Component, Input } from '@angular/core';
import { ToDo } from '../../interfaces/todo-list.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent {
  @Input() todoList: ToDo[] = [];

  constructor() {}

  removeTodo(el: ToDo) {
    const todoIndex = this.todoList.indexOf(el)
    this.todoList.splice(todoIndex, 1)
  }

  checkTodo(el: ToDo) {
    el.isCompleted = !el.isCompleted;
  }
}
