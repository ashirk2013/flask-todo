import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId: number = 0;
  todos: Todo[] = [];

  constructor() { }

  // simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = this.lastId++;
    }
    this.todos.push(todo);
    return this;
  }

  // simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id != id)
    return this;
  }
}
