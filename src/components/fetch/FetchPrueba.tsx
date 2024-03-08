import React, { useContext, useEffect, useState } from "react";
import { DataTodo } from "../../interfaces/dataTodo";
import Todos from "../todos/Todos";
import { loginContext } from "../../useContext/loginContext/LoginContext";

export const FetchPrueba: React.FC = () => {
  const { login, loginUser } = useContext(loginContext);

  const [todosList, setTodoList] = useState<DataTodo>();

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetch("https://dummyjson.com/todos");
      const result = await data.json();
      setTodoList(result);
      console.log(result);
    };
    getTodos();
  }, []);

  //   const handleCheckboxChange = (e: any) => {
  //     // setTodoList
  //     console.log(e);
  //     console.log(e.target.checked);
  //   };

  console.log(login);

  return (
    <div>
      {todosList?.todos.map((todo) => {
        return (
          <>
            <Todos
              key={todo.id}
              todo={todo.todo}
              status={todo.completed ? "active" : "inactive"}
            ></Todos>
            {loginUser && (
              <button onClick={() => loginUser()}>Iniciar sesion</button>
            )}
          </>
        );
        // return (
        //     <>
        //     <Todos></Todos>
        //       <div key={todo.id}>{todo.completed ? 'Terminada' : todo.todo}</div>
        //       <input type="checkbox" value="true" checked={todo.completed} onChange={handleCheckboxChange}/>
        //     </>
        //   );
      })}
    </div>
  );
};
