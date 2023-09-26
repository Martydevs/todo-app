import { Component, OnInit } from '@angular/core';
import { ToDo } from './interfaces/todo-list.interface';

@Component({
  selector: 'todo-container',
  templateUrl: 'todo-container.component.html'
})

export class ToDoComponent implements OnInit {
  public todoList: ToDo[] = []

  constructor() { }

  ngOnInit() { }

  sendTodo(todo: ToDo): void {
    this.todoList.push(todo)
  }
}