package app.backend.todo.todoappbackend;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TodoItem {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int item_id;

    @Column
    private String title;

    @Column
    private String desc;

    @Column
    private boolean done;

    public TodoItem() {
    }

    public int getId() {
        return item_id;
    }

    public void setId(int id) {
        this.item_id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public TodoItem(int id, String title, String desc, boolean done) {
        this.item_id = id;
        this.title = title;
        this.desc = desc;
        this.done = done;
    }

    public String toString() {
        return "TodoItem [id=" + item_id + ", title=" + title + ", desc=" + desc + ", done=" + done + "]";
    }
}
