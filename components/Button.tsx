import { ReactNode } from "react";

type Props = {
  onClick: () => void;
  children?: ReactNode;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className={
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
