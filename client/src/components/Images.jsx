import React from "react";
import { Image } from "@nextui-org/react";

const Images = () => {
  return (
    <div>
      <Image
        width={300}
        height={200}
        alt="NextUI hero Image with delay"
        src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
      />
    </div>
  );
};

export default Images;
