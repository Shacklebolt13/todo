package app.backend.todo.todoappbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
public class TodoItemController {

    @Autowired
    private TodoItemService todoItemService;

    @GetMapping("/todos")
    @ResponseBody
    public TodoItem[] getTodoItems() {
        return todoItemService.getTodoItems().toArray(new TodoItem[0]);
    }

    @PostMapping("/todo")
    @ResponseBody
    public TodoItem addTodoItem(@RequestBody(required = true) TodoItem todoItem) {
        System.out.println("Added TodoItem: " + todoItem);

        todoItemService.addTodoItem(todoItem);

        return todoItem;
    }

    @PutMapping("/todo")
    @ResponseBody
    public TodoItem updateTodoItem(@RequestBody(required = true) TodoItem todoItem) {
        System.out.println("Updated TodoItem: " + todoItem);

        try {
            todoItemService.updateTodoItem(todoItem);
        } catch (Exception e) {
            return todoItem;
        }
        return todoItem;
    }

    @DeleteMapping("/todo/{id}")
    @ResponseBody
    public boolean deleteTodoItem(@PathVariable(required = true) int id) {
        System.out.println("Deleted TodoItem: " + id);

        try {
            todoItemService.deleteTodoItem(id);
        } catch (Exception e) {
            return false;
        }

        return true;
    }
}
