import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { toUnicode } from 'punycode';

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

  // simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // sumulate GET /todos/:id
  getTodoById(id: number): Todo {
    let todo = this.todos
      .filter(todo => todo.id === id)
      .pop();

    return todo;
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
