import {Component, EventEmitter, Output, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDo } from '../../interfaces/todo-list.interface';
import {TodoService} from "../../../services/todo.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent {

  public todoForm: FormGroup;
  @Output() sendData = new EventEmitter<ToDo>();
  @Input() dataList: ToDo[] = []

  constructor(private fb: FormBuilder, private _todoService: TodoService) {
    this.todoForm = this.fb.group({
      description: ['', Validators.required],
    });
  }

  saveTodoOnStorage({ description, id }: ToDo) {
    this._todoService.setItemInStore(description ?? '', id)
  }

  onSubmit(): void {
    const todo: ToDo = { id: crypto.randomUUID(), description: this.todoForm.value.description, isCompleted: true, isSelected: false }
    if(this.todoForm.value.description) {
      this.sendData.emit(todo)
      this.saveTodoOnStorage(todo)
      this.todoForm.reset()
    }
  }

  deleteAllTask(): void {
    const { length } = this.dataList
    this.dataList.splice(0, length)
    this._todoService.clearStoredItems()
  }
}
