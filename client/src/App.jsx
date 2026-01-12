import React from "react";
import Base from "./pages/Base";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <div className="w-full">
        <Toaster position="top-center" />
        <Base></Base>
      </div>
    </>
  );
};

export default App;
