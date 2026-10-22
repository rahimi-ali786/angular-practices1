import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.type';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(todos: Todo[], searchTerm: string): Todo[] {
    if(!searchTerm){
      return todos;
    }
    const text = searchTerm.toLowerCase();
    return todos.filter((todo)=>{
      return todo.title.toLowerCase().includes(text)
    })
  }

}
