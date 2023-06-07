import React, { useState } from "react";

import "./NewTodo.css"

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  //   const textInputRef = useRef<HTMLInputElement>(null);
  const [todoText, setTodoText] = useState<string>("");

  const typingHandler = (event: any) => {
    setTodoText(event.target.value);
  };
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // const enteredText = textInputRef.current!.value;
    onAddTodo(todoText!);
    setTodoText("");
  };

  return (
    <form onSubmit={todoSubmitHandler} >
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input
          type="text"
          id="todo-text"
          value={todoText}
          onChange={typingHandler}
        />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
