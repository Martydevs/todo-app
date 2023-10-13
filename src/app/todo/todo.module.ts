import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoContainerComponent } from './todo-container.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [TodoContainerComponent],
  declarations: [
    TodoFormComponent,
    TodoListComponent,
    TodoContainerComponent
  ],
  providers: [],
})
export class ToDoModule { }
