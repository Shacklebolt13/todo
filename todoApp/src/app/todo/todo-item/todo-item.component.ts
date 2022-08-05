import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Todo } from "./Item";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})

export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() destroyTodo = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void { }

  destroyTodoHandlerChild(): void {
    console.log("destroyTodoEmitted");
    this.destroyTodo.emit(this.todo);
  }

}

