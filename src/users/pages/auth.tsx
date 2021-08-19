import React from "react";

import Auth from "../components/Auth";

interface IProps {
  toggleAuthentication: () => void;
}

const AuthPage: React.FC<IProps> = ({ toggleAuthentication }) => {
  return <Auth toggleAuthentication={toggleAuthentication} />;
};

export default AuthPage;
