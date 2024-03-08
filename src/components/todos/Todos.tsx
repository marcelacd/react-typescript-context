import React from "react";

type todoStatus = "active" | "inactive";

interface TodoProps {
  todo: string;
  status?: todoStatus;
}

const Todos: React.FC<TodoProps> = ({ todo, status }) => {
  return (
    <div>
      <i>{todo}</i>
      <h2>{status}</h2>
      <hr />
    </div>
  );
};

export default Todos;
