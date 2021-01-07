import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext.js";

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
    <li>
      <input
        type="checkbox"
        name="completed"
        id="completed"
        checked={todo.fields.completed}
        onChange={handleCompleted}
      />
      {/* <p className={todo.fields.completed ? 'checked' : 'notChecked'}>{todo.fields.description}</p> */}
      <p>{todo.fields.description}</p>
      <button type="type" onClick={(id) => handleDeleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
