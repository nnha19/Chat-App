import React, { useState } from "react";
import AuthPage from "./users/pages/auth";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen">
      <AuthPage setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
};

export default App;
