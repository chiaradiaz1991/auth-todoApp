import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext.js";
import styles from "../styles/Todo.module.css";


export default function Todo({ todo }) {
  const { updateTodo, deleteTodo } = useContext(TodosContext);
  const handleCompleted = async () => {
    const updatedFields = {
      ...todo.fields,
      completed: !todo.fields.completed,
    };
    const updatedTodo = { id: todo.id, fields: updatedFields };
    updateTodo(updatedTodo);
  };
  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        name="completed"
        id="completed"
        checked={todo.fields.completed}
        onChange={handleCompleted}
      />
      <p className={todo.fields.completed ? styles.checked : styles.notChecked}>{todo.fields.description}</p>
    </li>
  );
}
