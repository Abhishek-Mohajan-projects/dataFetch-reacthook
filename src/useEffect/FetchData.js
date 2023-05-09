import React from "react";
import useFetch from "../CustomHook/useFetch";

const FetchData = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const loadingMessage = <p>Todos is Loading</p>;
  const errorMessage = <p>{error}</p>;
  const todosElement =
    data &&
    data.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      <h1>Todos</h1>
      {isLoading && loadingMessage}
      {todosElement}
      {error && errorMessage}
    </div>
  );
};

export default FetchData;
