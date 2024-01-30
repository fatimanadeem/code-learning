import React from "react";

interface ButtonProps {
  children: string;
  colour?: string;
  onClick: () => void;
}

const Button = ({ children, colour = "primary", onClick }: ButtonProps) => {
  return (
    <div>
      <button className={"btn btn-" + colour} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
