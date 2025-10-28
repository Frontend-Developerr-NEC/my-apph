"use client";

import { useEffect, useState } from "react";
import "./page.css";
export default function Testing() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([]);
  useEffect(() => {
    const todoLS = JSON.parse(localStorage.getItem("Todos"));
    if (todoLS) {
      setTodolist(todoLS);
    }
    console.log(todoList);
  }, []);
  function addTodo(e) {
    e.preventDefault();
    if (todo == "") return;
    setTodolist([...todoList, { id: Date.now(), text: todo }]);
    localStorage.setItem("Todos", JSON.stringify(todoList));
    setTodo("");
  }

  function deleteTodo(id) {
    const filter = todoList.filter((item) => item.id !== id);
    setTodolist(filter);
    localStorage.setItem("Todos", JSON.stringify(filter));
  }
  return (
    <>
      <section className="todoContainer">
        <span>To-Do List</span>
        <div className="todoInput">
          <input
            type="text"
            placeholder="Add New Task"
            value={todo}
            onKeyUp={(e) => {
              if (e.key == "Enter") {
                addTodo(e);
              }
            }}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button type="button" onClick={addTodo}>
            Add
          </button>
        </div>
        <ul className="todoLists">
          {todoList.map((index) => (
            <div key={index.id} className="todoList">
              <span>{index.text}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTodo(index.id);
                }}
              >
                X
              </button>
            </div>
          ))}

          {/* <div className="todoList">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              dolorum totam, rem, eius nisi accusantium error cupiditate earum
              pariatur laudantium eos quaerat, culpa doloremque atque?
            </span>
            <button type="button" onClick={deleteTodo}>
              X
            </button>
          </div> */}
        </ul>
      </section>
    </>
  );
}
