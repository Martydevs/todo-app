import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ToDoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ToDoComponent],
  declarations: [
    TodoFormComponent,
    TodoListComponent,
    ToDoComponent
  ],
  providers: [],
})
export class ToDoModule { }
