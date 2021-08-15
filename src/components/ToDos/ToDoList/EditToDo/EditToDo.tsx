import React, { useState } from "react";

interface IProps {
  editToDo: (id: number) => void;
  id: number;
}

const EditToDo: React.FC<IProps> = ({ editToDo, id }) => {
  return (
    <i
      onClick={() => editToDo(id)}
      className="mr-4 text-green-600 text-lg cursor-pointer fas fa-edit"
    ></i>
  );
};

export default EditToDo;
