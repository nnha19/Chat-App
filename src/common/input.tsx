import React from "react";

interface IInput {
  type: string;
  label: String;
  placeholder: string;
  value: string;
  name: string;
  change: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

const Input: React.FC<IInput> = ({
  type,
  label,
  placeholder,
  value,
  name,
  change,
}) => {
  return (
    <div className="mb-4">
      <label className="font-medium">{label}</label>
      <input
        onChange={(e) => change(e, name)}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        className="border-b-2 border-black px-4 rounded outline-none py-1 mt-2 text block w-full "
      />
    </div>
  );
};
export default Input;
