import { useEffect, useState } from "react";
import TodoService from "../services/todo.service";
import CreateTodoForm from "./CreateTodoForm";
import Todos from "./Todos";

function TodosWrapper() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loadingTodos, setLoadingTodos] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [updateData, setUpdateData] = useState({ id: null, state: false });

  async function addTodo(newTodo) {
    try {
      setLoading(true);
      const res = await TodoService.addTodo({ title: newTodo });
      const jsonRes = await res.json();

      setLoading(false);
      if (jsonRes.success === true) {
        setTitle("");
        fetchAllTodos();
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }
  async function updateTodo(newTodo, id) {
    try {
      setLoading(true);
      const res = await TodoService.updateTodo(id || updateData.id, newTodo);
      const jsonRes = await res.json();

      setLoading(false);
      if (jsonRes.success === true) {
        setTitle("");
        setUpdateData({ id: null, state: false });
        fetchAllTodos();
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  async function fetchAllTodos() {
    try {
      const res = await TodoService.getTodos();
      const jsonRes = await res.json();

      console.log(jsonRes.data);
      setTodos(jsonRes.data);
      setLoadingTodos(false);
    } catch (error) {
      console.error(error);
      setLoadingTodos(false);
    }
  }

  async function deleteTodo(todoId) {
    try {
      setLoadingDelete(true);
      const res = await TodoService.deleteTodo(todoId);
      const jsonRes = await res.json();

      setLoadingDelete(false);
      if (jsonRes.success) {
        alert(jsonRes.message);
      }
    } catch (error) {
      setLoadingDelete(false);
      console.error(error);
    }
  }

  useEffect(function () {
    console.log("COMPONENT HAS BEEN MOUNTED");
    fetchAllTodos();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
      }}
    >
      <section
        style={{
          border: "2px solid #333",
          width: "100%",
          padding: "20px",
          margin: "0 20%",
        }}
      >
        <div>
          <CreateTodoForm
            {...{
              title,
              setTitle,
              addTodo,
              updateTodo,
              loading,
              isUpdating: updateData.state,
              setUpdateData,
            }}
          />
          <br />
          <br />
          <Todos
            todosArray={todos}
            {...{
              title,
              setTitle,
              loading: loadingTodos,
              setUpdateData,
              deleteTodo,
              loadingDelete,
              updateTodo
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default TodosWrapper;
