import React, { useState } from "react";

export interface IProps {
  toDos: string[];
  setToDos: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddToDos: React.FC<IProps> = ({ toDos, setToDos }) => {
  const [input, setInput] = useState<string>("");

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const addToDoHandler = (): void => {
    if (!input) {
      return;
    }
    setToDos([...toDos, input]);
    setInput("");
  };

  return (
    <div className="flex justify-center py-4 px-12">
      <input
        onChange={changeInputHandler}
        value={input}
        className="py-1 rounded px-4 mr-2"
        type="text"
      />
      <button
        onClick={addToDoHandler}
        className="px-4 py-1 bg-purple-600 text-white rounded"
      >
        Add To Do
      </button>
    </div>
  );
};

export default AddToDos;
