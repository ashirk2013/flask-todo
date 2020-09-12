import { TestBed } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllTodos()', () => {
    it('should return an empty array by default', () => {
      let todos = service.getAllTodos();
      expect(todos).toEqual([]);
    });

    it('should return all todos', () => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);

      let todos = service.getAllTodos();
      expect(todos).toEqual([todo1, todo2]);
    });
  });


  describe('#save(todo)', () => {
    it('should automatically assign an incrementing id', () => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(service.getTodoById(0)).toEqual(todo1);
      expect(service.getTodoById(1)).toEqual(todo2);
    });
  });
});
