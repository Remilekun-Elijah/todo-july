function Todo(props) {
  const {
    setTitle,
    todo,
    setUpdateData,
    deleteTodo,
    loadingDelete,
    updateTodo,
  } = props;

  function handleEdit() {
    setTitle(todo.title);
    setUpdateData({ id: todo.todoId, state: true });
  }
  function handleDelete() {
    deleteTodo(todo.todoId);
  }

  return (
    <ul style={{ listStyle: "none" }}>
      <li
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "20px",
          marginBottom: "10px",
          backgroundColor: "#f0f0f0",
          padding: "10px",
          // textDecoration: "line-through",
          cursor: "pointer",
        }}
        onClick={() => updateTodo({ completed: !todo.completed }, todo.todoId)}
      >
        <div
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          <span>{todo.id}.</span> <span>{todo.title}</span>
        </div>
        <div>
          <button
            style={{
              fontSize: "16px",
              padding: "4px 8px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            style={{
              fontSize: "16px",
              padding: "4px 8px",
              backgroundColor: "red",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleDelete}
          >
            {loadingDelete ? "Deleting..." : "Delete"}
          </button>
        </div>
      </li>
    </ul>
  );
}

export default Todo;
