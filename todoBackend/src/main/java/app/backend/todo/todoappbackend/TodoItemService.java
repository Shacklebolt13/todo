package app.backend.todo.todoappbackend;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoItemService {

    @Autowired
    TodoItemRespository todoItemRepository;

    public List<TodoItem> getTodoItems() {
        System.out.println("getTodoItems");
        List<TodoItem> todoItems = new ArrayList<TodoItem>();
        todoItemRepository.findAll().forEach(item -> todoItems.add(item));

        return todoItems;
    }

    public void deleteTodoItem(int todoItem_id) {
        System.out.println("Deleted TodoItem: " + todoItem_id);
        todoItemRepository.deleteById(todoItem_id);
        ;
    }

    public void addTodoItem(TodoItem todoItem) {
        System.out.println("Added TodoItem: " + todoItem);
        todoItemRepository.save(todoItem);
    }

    public void updateTodoItem(TodoItem todoItem) throws Exception {

        System.out.println("Updated TodoItem: " + todoItem.toString());
        try {
            Optional<TodoItem> todoItemOptional = todoItemRepository.findById(todoItem.getId());
            if (todoItemOptional.isPresent()) {
                TodoItem todoItemToUpdate = todoItemOptional.get();
                todoItemToUpdate.setDone(todoItem.isDone());
                todoItemRepository.save(todoItemToUpdate);
            } else {
                throw new Exception("TodoItem not found");
            }
        } catch (Exception e) {
            throw new Exception("TodoItem not found");
        }
    }

}
