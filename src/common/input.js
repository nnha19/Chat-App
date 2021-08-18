import React from "react"

interface IInput {
    type :string;
    label :String;
}

const Input:React.FC<IInput> =({type,label})=> {
    return (
        <div className="mb-4">
          <label className="font-bold">{label}</label>
          <input
            type={type}
            className="px-4 rounded border-none outline-none py-1 mt-2 text block w-full "
          />
        </div>
    )
}
export default Input