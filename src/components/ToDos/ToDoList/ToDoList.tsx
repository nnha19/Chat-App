import React, { useState } from "react";

import DeleteToDo from "./DeleteToDo/DeleteToDo";
import EditForm from "./EditForm/EditForm";
import EditToDo from "./EditToDo/EditToDo";

interface IProps {
  toDos: {
    toDo: string;
    isEditing?: boolean;
  }[];
  setToDos: React.Dispatch<
    React.SetStateAction<
      {
        toDo: string;
        isEditing?: boolean | undefined;
      }[]
    >
  >;
}

const ToDoList: React.FC<IProps> = ({ toDos, setToDos }) => {
  const editToDoHandler = (id: number): void => {
    toDos.forEach((toDo, i) => {
      if (id === i) {
        const clonedToDos = [...toDos];
        const update = { ...toDos[i], isEditing: true };
        clonedToDos[i] = update;
        setToDos(clonedToDos);
      }
    });
  };

  const deleteToDoHandler = (id: number): void => {
    const updatedToDos = toDos.filter((toDo, i) => {
      return i !== id;
    });
    setToDos(updatedToDos);
  };

  const cancelEditHandler = (id: number): void => {
    toDos.forEach((todo, i) => {
      if (id === i) {
        const clonedToDos = [...toDos];
        clonedToDos[i].isEditing = false;
        setToDos(clonedToDos);
      }
    });
  };

  const editConfirmHandler = (id: number, updateValue: string): void => {
    toDos.forEach((toDo, i) => {
      if (i === id) {
        const cloned = [...toDos];
        cloned[i].toDo = updateValue;
        cloned[i].isEditing = false;
        setToDos(cloned);
      }
    });
  };

  const renderToDos = toDos.map((toDo, i) => {
    return (
      <div className="py-4 px-12 mt-2 bg-gray-200 flex justify-between">
        {!toDo.isEditing ? (
          <>
            <span>{toDo.toDo}</span>
            <div>
              <EditToDo id={i} editToDo={editToDoHandler} />
              <DeleteToDo id={i} deleteToDo={deleteToDoHandler} />
            </div>
          </>
        ) : (
          <EditForm
            editConfirm={editConfirmHandler}
            toDoVal={toDo.toDo}
            id={i}
            cancelEdit={cancelEditHandler}
          />
        )}
      </div>
    );
  });
  return <div className="bg-white h-96 overflow-y-scroll">{renderToDos}</div>;
};

export default ToDoList;
