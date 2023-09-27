import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from "@nextui-org/react";
import React from "react";

const Cards = () => {
  return (
    <div>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            <p className="text-small text-default-500">Muhaz Ahmed</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>This is a Next UI tutorial</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/muhazAhmed/next-ui.git"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
