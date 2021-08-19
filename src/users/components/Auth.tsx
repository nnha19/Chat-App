import { stringify } from "querystring";
import React, { useState } from "react";
import Btn from "../../common/button";
import Input from "../../common/input";

interface IFormVal {
  email: string;
  name: string;
  password: string;
}

interface IProps {
  toggleAuthentication: () => void;
}

const Auth: React.FC<IProps> = ({ toggleAuthentication }) => {
  const [inputVals, setInputVals] = useState<IFormVal>({
    name: "",
    email: "",
    password: "",
  });

  const changeInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ): void => {
    setInputVals({ ...inputVals, [name]: e.target.value });
  };

  const registerUserHandler = (e: any) => {
    e.preventDefault();
    toggleAuthentication();
    const clearInput: any = {};
    for (let key in inputVals) {
      clearInput[key as keyof IFormVal] = "";
    }
    setInputVals(clearInput);
  };

  return (
    <div className="h-screen bg-primary flex items-center">
      <div className="w-96 bg-white mx-auto p-12 py-16 rounded">
        <h2 className="text-center text-xl mb-8 font-medium">
          Register Account
        </h2>
        <form onSubmit={registerUserHandler} className="w-4/5 mx-auto">
          <Input
            value={inputVals.name}
            placeholder="Your name"
            type="text"
            label="User Name"
            name="name"
            change={changeInputHandler}
          />
          <Input
            value={inputVals.email}
            placeholder="Your email"
            type="email"
            label="Email"
            change={changeInputHandler}
            name="email"
          />
          <Input
            value={inputVals.password}
            placeholder="Your password"
            type="password"
            name="password"
            change={changeInputHandler}
            label="Password"
          />
          <Btn>Create account</Btn>
        </form>
      </div>
    </div>
  );
};

export default Auth;
