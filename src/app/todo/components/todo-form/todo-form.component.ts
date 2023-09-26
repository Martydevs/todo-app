import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDo } from '../../interfaces/todo-list.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() sendData = new EventEmitter<ToDo>();
  @Input() dataList: ToDo[] = []

  public todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const todo: ToDo = this.todoForm.value;
    this.sendData.emit(todo)
    this.todoForm.reset()
  }

  deleteTask(): void {}
}
