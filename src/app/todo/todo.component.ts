import { Component, signal, OnInit, inject } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.type';
import { catchError } from 'rxjs/operators';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe} from '../pipes/filter-pipe.pipe';
@Component({
  selector: 'app-todo',
  imports: [TodoItemComponent, FormsModule, FilterPipePipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  // constructor(private todoService: TodoService) {}
  todoService = inject(TodoService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit() {
    // console.log(this.todoService.todoItems);
    // this.todoItems.set(this.todoService.todoItems);
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        }),
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}
