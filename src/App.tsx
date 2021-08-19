import React, { useState } from "react";
import AuthPage from "./users/pages/auth";

import { Route, Switch } from "react-router-dom";
import ChatPage from "./users/pages/chatPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setIsAuthenticatedHandler = (): void => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <div className="min-h-screen bg-primary">
      {!isAuthenticated ? (
        <AuthPage toggleAuthentication={setIsAuthenticatedHandler} />
      ) : (
        <Route path="/" component={ChatPage} />
      )}
    </div>
  );
};

export default App;
