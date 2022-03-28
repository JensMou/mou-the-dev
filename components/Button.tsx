import { ReactNode } from "react";

type Props = {
    onClick: () => void;
    children?: ReactNode;
    theme: "primary" | "secondary" | "icon";
};

const Button = ({ children, onClick, theme = "primary" }: Props) => {
    const themeClasses =
        theme === "primary"
            ? "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 "
            : theme === "secondary"
            ? "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 "
            : theme === "icon"
            ? ""
            : "";
    return (
        <button
            className={"font-bold rounded my-5" + themeClasses}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
