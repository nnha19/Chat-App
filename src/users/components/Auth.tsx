import React from "react";
import Btn from "../../common/button";
import Input from "../../common/input";

const Auth = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="w-96 bg-gray-400 mx-auto p-8">
        <h2 className="text-center text-xl mb-8 font-medium">
          Register Account
        </h2>
        <form className="w-4/5 mx-auto">
          <Input type="text" label="User Name" />
          <Input type="email" label="Email" />
          <Input type="password" label="Password" />
          <Btn>Create account</Btn>
        </form>
      </div>
    </div>
  );
};

export default Auth;
