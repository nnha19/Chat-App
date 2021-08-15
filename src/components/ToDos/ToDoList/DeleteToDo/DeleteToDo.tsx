import React from "react";

interface IProps {
  deleteToDo: (id: number) => void;
  id: number;
}

const DeleteToDo: React.FC<IProps> = ({ deleteToDo, id }) => {
  return (
    <i
      onClick={() => deleteToDo(id)}
      className="fas  text-red-700 text-lg cursor-pointer fa-trash"
    ></i>
  );
};

export default DeleteToDo;
