function CreateTodoForm(props) {
  const addTodoFn = props.addTodo;
  const updateTodoFn = props.updateTodo;
  const { title, setTitle, loading, isUpdating, setUpdateData } = props;

  function handleSubmit(eventObject) {
    // Prevent the default form submission behavior
    eventObject.preventDefault();

    if (isUpdating) updateTodoFn({ title });
    else addTodoFn(title);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="title"
        style={{
          display: "block",
          fontSize: "20px",
        }}
      >
        Todo
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          console.log("Input changed:", e.target.value);
        }}
        style={{
          fontSize: "16px",
          padding: "8px",
          width: "88%",
        }}
      />
      <button
        type="submit"
        style={{
          fontSize: "16px",
          padding: "8px 12px",
          marginLeft: "10px",
        }}
      >
        {loading ? "Loading..." : isUpdating ? "Update Todo" : "Add Todo"}
      </button>
      {isUpdating && (
        <button
          onClick={() => {
            setTitle("");
            setUpdateData({ id: null, state: false });
          }}
          type="button"
          style={{
            fontSize: "16px",
            padding: "8px 12px",
            marginLeft: "10px",
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default CreateTodoForm;
