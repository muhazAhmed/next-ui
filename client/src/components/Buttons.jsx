import React, { useState } from "react";
import { Button } from "@nextui-org/button";

const Buttons = () => {
  const [mode, setMode] = useState(true);
  const changeMode = () => {
    setMode(!mode);
    if (mode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <div className="m-5 flex items-center gap-[2rem]">
      <Button color="primary" onClick={changeMode}>
        {mode ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </Button>
      <Button color="primary" variant="shadow" size="lg">
        Shadow
      </Button>
    </div>
  );
};

export default Buttons;
