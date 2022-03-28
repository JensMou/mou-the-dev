import { createPortal } from "react-dom";

type Props = {
    percentage: string;
};

const Progressbar = ({ percentage }: Props): React.ReactElement => {
    const bodyArr = document.getElementsByTagName("body");
    const body = bodyArr[0];
    const elem = (
        <>
            <div className="h-2"></div>
            <div className="fixed bottom-2 ml-2 font-sans text-xl text-black dark:text-white">
                {`${percentage}%`}
            </div>
            <div className="progress-bar w-full fixed bottom-0 h-2 bg-white dark:bg-black">
                <div
                    className="progress-bar_bar h-full bg-black dark:bg-white"
                    style={{
                        height: "100%",
                        width: `${percentage}%`,
                        borderRadius: "inherit",
                        textAlign: "right",
                    }}
                ></div>
            </div>
        </>
    );
    if (body) {
        return createPortal(elem, body);
    } else {
        return <></>;
    }
};

export default Progressbar;
