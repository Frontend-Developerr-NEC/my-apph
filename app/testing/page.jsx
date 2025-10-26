"use client";

import "./page.css";
export default function Testing() {
  function addTodo(e) {
    e.preventDefault();
    const todoTxt = document.getElementById("todo").value;

    if (todoTxt !== "") {
      const todoLists = document.querySelector(".todoLists");

      const todoList = document.createElement("div");
      todoList.className = "todoList";

      const todo = document.createElement("span");
      todo.textContent = todoTxt;

      const deleteTodo = document.createElement("button");
      deleteTodo.textContent = "X";

      const todoData = localStorage.getItem("todos") || [];

      let data = { id: 1, todo: todoTxt, createdAt: new Date().toUTCString() };

      todoLists.appendChild(todoList);
      todoList.appendChild(todo);
      todoList.appendChild(deleteTodo);

      localStorage.setItem("todos", JSON.stringify(data));

      console.log(JSON.parse(todoData));
    }
  }

  function deleteTodo(e) {
    e.preventDefault();
    
  }
  return (
    <>
      <section className="todoContainer">
        <span>Todo</span>
        <div>
          <div className="todoInput">
            <input type="text" id="todo" />
            <button type="button" onClick={addTodo}>
              Add
            </button>
          </div>
          <div className="todoLists">
            <div className="todoList">
              <span>Eating</span>
              <button type="button" onClick={deleteTodo}>
                X
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
