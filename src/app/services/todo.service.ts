import { Injectable } from '@angular/core';
import {ToDo} from "../todo/interfaces/todo-list.interface";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }

  setItemInStore(item: string, name: string) {
    return localStorage.setItem(name, item)
  }

  clearStoredItems(): void {
    localStorage.clear()
  }

  deleteStoredItem({ id }: ToDo): void {
    localStorage.removeItem(id)
  }
}
