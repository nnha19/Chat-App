import React, { useState } from "react";

import FilterToDos from "./FilterToDos/FilterToDos";
import ToDoList from "./ToDoList/ToDoList";
import AddToDos from "./AddToDos/AddToDos";

export interface IState {
  toDos: {
    toDo: string;
    isEditing?: boolean;
  }[];
}

const ToDos = () => {
  const [toDos, setToDos] = useState<IState["toDos"]>([
    { toDo: "Go Shopping" },
    { toDo: "Walk The Dog" },
  ]);

  return (
    <div className="w-full sm:11/12 md:w-2/3 lg:w-2/5 bg-yellow-500  my-12 mx-auto">
      <FilterToDos />
      <ToDoList toDos={toDos} setToDos={setToDos} />
      <AddToDos toDos={toDos} setToDos={setToDos} />
    </div>
  );
};

export default ToDos;
