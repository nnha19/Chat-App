import React from "react";

import ToDos from "./components/ToDos/ToDos";

const App = () => {
  return (
    <div className="min-h-screen bg-purple-700 p-6">
      <h1 className="text-center text-2xl text-white uppercase">To Do App</h1>
      <ToDos />
    </div>
  );
};

export default App;
