import { Component, Input } from '@angular/core';
import { ToDo } from '../../interfaces/todo-list.interface';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent {
  @Input() todoList: ToDo[] = [];
  public newTodo = new FormControl('')
  public isSelectedUpdateTodo: boolean = false

  constructor() {}

  removeTodo(el: ToDo): void {
    const todoIndex = this.todoList.indexOf(el)
    this.todoList.splice(todoIndex, 1)
  }

  triggerToUpdateTodo(): void {
    this.isSelectedUpdateTodo = !this.isSelectedUpdateTodo;
  }

  updateTodo(el: ToDo): void {
    el.description = this.newTodo.value
    this.isSelectedUpdateTodo = false
  }

  checkTodo(el: ToDo): void {
    el.isCompleted = !el.isCompleted;
  }
}
