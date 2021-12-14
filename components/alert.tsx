import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";

import { hide } from "../slices/alertSlice";

const Alert = () => {
  const open = useAppSelector((state) => state.alert.open);
  const dispatch = useAppDispatch();

  if (!open) {
    return null;
  }

  return (
    <div className="absolute bottom-0 right-0 bg-black text-white p-5 font-mono">
      <div className="flex">
        <button className="hover:text-primary" onClick={() => dispatch(hide())}>
          X
        </button>
        <p className="ml-5">This page does not use cookies</p>
      </div>
    </div>
  );
};

export default Alert;
