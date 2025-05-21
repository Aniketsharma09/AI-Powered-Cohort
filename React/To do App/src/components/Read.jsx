import React, { useContext } from "react";
import { toast } from "react-toastify";
import { TodoContext } from "../Wrapper";// Adjust the path as needed
// Adjust the path as needed


const Read = () => {
 const [todos, settodos] = useContext(TodoContext);
  const deletehandler = (id) => {
    const filteredTodos = todos.filter((todo) => id != todo.id);
    settodos(filteredTodos);
    toast.success("task completed",{
      autoClose: 1500,
    });
  };
  // const settodos = props.settodos;
  const renderTodos = todos.map((todo) => {
    return (
      <li
        className="list-none w-full bg-teal-50 px-5 py-3 capitalize rounded flex justify-between text-balance font-medium mb-2"
        key={todo.id}
      >
        {todo.title}{" "}
        <button
          className="text-red-500 cursor-pointer active:scale-95 hover:text-red-400"
          onClick={() => deletehandler(todo.id)}
        >
          Completed
        </button>
      </li>
    );
  });
  return (
    <div className="w-[60%] bg-indigo-100 p-7 border overflow-auto">
      <h1 className="text-4xl text-center mb-7">Pending Tasks</h1>
      {renderTodos}
    </div>
  );
};

export default Read;
