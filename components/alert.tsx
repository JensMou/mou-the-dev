import Container from "./container";
import cn from "classnames";
import { useState } from "react";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  const [closed, setClosed] = useState(false);
  if (closed) {
    return null;
  }
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="flex justify-center py-2 text-center text-sm fle">
          <p className="mr-5">This page does not use cookies</p>
          <button onClick={() => setClosed(true)}>X</button>
        </div>
      </Container>
    </div>
  );
};

export default Alert;
