import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {

  return (
    <div className="bg-slate-100 text-slate-900 w-screen h-screen p-12 flex justify-between">
      <Read />
      <Create />
    </div>
  );
};

export default App;
