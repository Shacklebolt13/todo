import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { first } from "rxjs";
import { TodocrudService } from "../todocrud.service";
import { Todo } from "./todo-item/Item";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})

export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  doneStatus: boolean = false;
  @ViewChild("in_title") in_title!: ElementRef;
  @ViewChild("in_done") in_done!: ElementRef;
  @ViewChild("in_desc") in_desc!: ElementRef;
  crudService: TodocrudService;

  constructor(crudService: TodocrudService) {
    this.crudService = crudService;

    this.crudService.getTodos().pipe(first()).subscribe((data: []) => {
      data.forEach(element => {
        this.todos.push(new Todo(element["id"], element["title"], element["desc"], element["done"], this.crudService));
      });;
    });
  }

  ngOnInit(): void { }

  destroyTodoHandlerParent(todo: Todo): void {
    console.log("destroyTodoCaught");

    this.crudService.deleteTodo(todo.id).pipe(first()).subscribe((data: any) => {
      if (data) {
        this.todos = this.todos.filter(item => item.id !== todo.id);
      }


    });
  }

  toggleFormDone(): void {
    this.doneStatus = !this.doneStatus;
  }

  addTodo() {
    console.log("addTodo");
    console.log(this.in_title.nativeElement.value);
    console.log(this.in_done.nativeElement.checked);
    console.log(this.in_desc.nativeElement.value);

    this.crudService.addTodo(this.in_title.nativeElement.value, this.in_desc.nativeElement.value, this.in_done.nativeElement.checked).pipe(first()).subscribe((data: any) => {
      console.log(data);
      this.todos.push(new Todo(data["id"], data["title"], data["desc"], data["done"], this.crudService));

      this.in_title.nativeElement.value = "";
      this.in_desc.nativeElement.value = "";
      this.in_done.nativeElement.checked = false;
    });
  }
}


