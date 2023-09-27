import { Progress } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <Progress
      aria-label="Downloading..."
      size="md"
      value={value}
      color="success"
      showValueLabel={true}
      className="max-w-md"
    />
  );
};

export default ProgressBar;
