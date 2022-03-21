import { useAppSelector, useAppDispatch } from "../hooks";

import { hide } from "../slices/alertSlice";

const CookieAlert = () => {
  const open = useAppSelector((state) => state.alert.open);
  const dispatch = useAppDispatch();

  if (!open) {
    return null;
  }

  return (
    <div className="sticky w-80 z-10 left-0 bottom-0 p-2 bg-black text-white font-mono ">
      <div className="flex">
        <p className="mr-5">
          This page is not sending your data anywhere. Cookies are only used to
          persist data.
        </p>
        <button className="hover:text-primary" onClick={() => dispatch(hide())}>
          X
        </button>
      </div>
    </div>
  );
};

export default CookieAlert;
