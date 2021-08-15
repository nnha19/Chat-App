import React from "react";

const ToDoList: React.FC<{ toDos: string[] }> = ({ toDos }) => {
  const renderToDos = toDos.map((toDo) => {
    return (
      <div className="py-4 px-12 mt-2 bg-gray-200 flex justify-between">
        <span>{toDo}</span>
        <div>
          <i className="mr-4 text-green-600 text-lg cursor-pointer fas fa-edit"></i>
          <i className="fas text-red-700 text-lg cursor-pointer fa-trash"></i>
        </div>
      </div>
    );
  });
  return <div className="bg-white h-96 overflow-y-scroll">{renderToDos}</div>;
};

export default ToDoList;
