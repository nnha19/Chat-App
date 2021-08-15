import React from "react";
import DeleteToDo from "./DeleteToDo/DeleteToDo";

import { IProps } from "../AddToDos/AddToDos";

const ToDoList: React.FC<IProps> = ({ toDos, setToDos }) => {
  const deleteToDoHandler = (id: number): void => {
    const updatedToDos = toDos.filter((toDo, i) => {
      return i !== id;
    });
    setToDos(updatedToDos);
  };

  const renderToDos = toDos.map((toDo, i) => {
    return (
      <div className="py-4 px-12 mt-2 bg-gray-200 flex justify-between">
        <span>{toDo}</span>
        <div>
          <i className="mr-4 text-green-600 text-lg cursor-pointer fas fa-edit"></i>
          <DeleteToDo id={i} deleteToDo={deleteToDoHandler} />
        </div>
      </div>
    );
  });
  return <div className="bg-white h-96 overflow-y-scroll">{renderToDos}</div>;
};

export default ToDoList;
