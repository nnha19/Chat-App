import React from "react";

import Auth from "../components/Auth";

interface IProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthPage: React.FC<IProps> = ({ setIsAuthenticated }) => {
  return <Auth setIsAuthenticated={setIsAuthenticated} />;
};

export default AuthPage;
