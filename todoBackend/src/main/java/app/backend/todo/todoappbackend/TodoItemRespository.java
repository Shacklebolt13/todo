package app.backend.todo.todoappbackend;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface TodoItemRespository extends CrudRepository<TodoItem, Integer> {

}
