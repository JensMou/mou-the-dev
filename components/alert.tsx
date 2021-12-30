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
    <div className="absolute top-0 left-0 bg-black text-white p-5 font-mono">
      <div className="flex">
        <p className="mr-5">Hi! This page does not use cookies.</p>
        <button className="hover:text-primary" onClick={() => dispatch(hide())}>
          X
        </button>
      </div>
    </div>
  );
};

export default Alert;
