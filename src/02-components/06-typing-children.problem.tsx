import React from "react";
import { FC } from "react";

type Props = {
  children?: React.ReactNode;
};

export const Button = (props: { children: React.ReactNode }) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
