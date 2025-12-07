const BACKEND_URL = "http://localhost:3000";

async function fetchService(route, options) {
  return fetch(BACKEND_URL + route, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
}

async function getTodos() {
  const options = {
    method: "GET",
  };
  return fetchService("/todo", options);
}
async function deleteTodo(id) {
  const options = {
    method: "DELETE",
  };
  return fetchService("/todo/" + id, options);
}

async function addTodo(todo) {
  const options = {
    method: "POST",
    body: JSON.stringify(todo),
  };

  return fetchService("/todo", options);
}

async function updateTodo(id, todo) {
  const options = {
    method: "PUT",
    body: JSON.stringify(todo),
  };

  return fetchService("/todo/" + id, options);
}

export default {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
