import React, { useState } from "react";
import { Switch } from "@nextui-org/react";

const Switches = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="flex gap-4">
      <Switch defaultSelected size="sm">
        Small
      </Switch>
      <Switch defaultSelected size="md">
        Medium
      </Switch>
      <Switch size="lg" isSelected={isSelected} onValueChange={setIsSelected}>
        Large
      </Switch>
    </div>
  );
};

export default Switches;
