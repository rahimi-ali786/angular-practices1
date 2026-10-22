import { Injectable, inject } from '@angular/core';
import { Todo } from '../models/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // http= inject(HttpClient);
  constructor(private http: HttpClient) {}

  // todoItems: Array<Todo> = [
  //   {
  //     id: 0,
  //     title: 'groceries',
  //     completed: false,
  //     userId: 1,
  //   },
  //   {
  //     id: 1,
  //     title: 'car wash',
  //     completed: false,
  //     userId: 1,
  //   },
  // ];
  getTodosFromApi(){
   const url= `https://jsonplaceholder.typicode.com/todos`;
   return this.http.get<Array<Todo>>(url);
  }
}
