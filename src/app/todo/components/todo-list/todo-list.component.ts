import {Component, Input} from '@angular/core';
import {ToDo} from '../../interfaces/todo-list.interface';
import {FormControl} from "@angular/forms";
import {TodoService} from "../../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent {
  @Input() todoList: ToDo[] = [];
  public newTodo = new FormControl('')

  constructor(private _todoService: TodoService) {}

  removeTodo(el: ToDo): void {
    const todoIndex = this.todoList.indexOf(el)
    this.todoList.splice(todoIndex, 1)
    this._todoService.deleteStoredItem(el)
  }

  triggerToUpdateTodo(el: ToDo): void {
    el.isSelected = !el.isSelected
  }

  updateTodo(el: ToDo): void {
    el.description = this.newTodo.value
    el.isSelected = false
  }

  checkTodo(el: ToDo): void {
    el.isCompleted = !el.isCompleted;
  }
}
