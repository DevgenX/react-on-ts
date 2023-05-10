import React, { ComponentProps } from "react";

type InputProps = Omit<ComponentProps<"button">, "onChange"> & {
  onClick?: (event: React.MouseEventHandler<HTMLButtonElement>) => void;
};

export const Button = ({ className, onClick, ...rest }: InputProps) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`default-classname ${className}`}
    ></button>
  );
};

const Parent = () => {
  return (
    <Button
      onClick={(e) => {
        console.log(e);
      }}
      type="button"
    ></Button>
  );
};
