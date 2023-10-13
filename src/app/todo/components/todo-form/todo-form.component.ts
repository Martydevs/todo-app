import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDo } from '../../interfaces/todo-list.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  public todoForm: FormGroup;
  @Output() sendData = new EventEmitter<ToDo>();
  @Input() dataList: ToDo[] = []

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const todo: ToDo = { description: this.todoForm.value.description, isCompleted: true, isSelected: false }
    this.sendData.emit(todo)
    this.todoForm.reset()
  }

  deleteAllTask(): void {
    const { length } = this.dataList
    this.dataList.splice(0, length)
  }
}
