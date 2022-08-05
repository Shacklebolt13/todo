import { TodocrudService } from "src/app/todocrud.service";
import { first } from "rxjs";

export class Todo {
  id!: number;
  title!: string;
  desc!: string;
  done!: boolean;
  crudService!: TodocrudService;

  constructor(id: number, title: string, desc: string, done: boolean, crudService: TodocrudService) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.done = done;
    this.crudService = crudService;
  }

  toggleDone = () => {
    console.log(this);
    this.crudService.updateTodo(this.id, !this.done).pipe(first()).subscribe((data: any) => {
      console.log(data);
      this.done = data["done"];
    });
  }
}


