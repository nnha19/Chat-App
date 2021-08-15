import React, { useState } from "react";

interface IProps {
  cancelEdit: (id: number) => void;
  id: number;
  toDoVal: string;
  editConfirm: (id: number, updateVal: string) => void;
}

const EditForm: React.FC<IProps> = ({
  cancelEdit,
  id,
  toDoVal,
  editConfirm,
}) => {
  const [editedVal, setEditedVal] = useState<string>(toDoVal);

  const editingValHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedVal(e.target.value);
  };

  return (
    <div className="flex justify-between">
      <input
        onChange={editingValHandler}
        value={editedVal}
        className="py-1 rounded px-4"
        type="text"
      />
      <div>
        <button
          onClick={() => editConfirm(id, editedVal)}
          className="py-1 px-4 rounded bg-purple-600 text-white ml-4 mr-4"
        >
          Edit
        </button>
        <button
          onClick={() => cancelEdit(id)}
          className="py-1 px-4 rounded bg-red-500 text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default EditForm;
