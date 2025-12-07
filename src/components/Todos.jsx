import Todo from "./Todo";

function Todos(props) {
  const todos = props.todosArray;
  const {
    title,
    setTitle,
    loading,
    setUpdateData,
    deleteTodo,
    loadingDelete,
    updateTodo,
  } = props;

  return (
    <div>
      <h1
        style={{
          borderBottom: "2px solid #333",
        }}
      >
        Todos
      </h1>

      <section style={{ padding: "20px 0px" }}>
        {loading === true ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            Loading...
          </p>
        ) : (
          todos.map(function (todo, index) {
            return (
              <Todo
                key={index + 1}
                todo={{
                  title: todo.title,
                  id: index + 1,
                  todoId: todo._id,
                  completed: todo.completed,
                }}
                {...{
                  title,
                  setTitle,
                  setUpdateData,
                  deleteTodo,
                  loadingDelete,
                  updateTodo,
                }}
              />
            );
          })
        )}
      </section>
    </div>
  );
}

export default Todos;
