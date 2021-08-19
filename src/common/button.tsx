import React from "react";

interface IBtn {
  children: React.ReactNode;
}

const Btn: React.FC<IBtn> = ({ children }) => {
  return (
    <button className="bg-primary text-white rounded-full px-4 py-2 w-full mt-2 font-medium text-lg">
      {children}
    </button>
  );
};
export default Btn;
