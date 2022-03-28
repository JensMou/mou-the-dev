import { useRouter } from "next/router";
import Button from "./Button";
import Emoji from "./Emoji";

const BackButton = () => {
    const router = useRouter();

    return (
        <Button theme="icon" onClick={() => router.back()}>
            <span className="text-3xl rounded pt-0 px-2 pb-3 hover:bg-glass dark:hover:bg-glassDark">
                <Emoji symbol="👈" label="Back Arrow" />
                <span className="text-lg mr-2">{` Back`}</span>
            </span>
        </Button>
    );
};

export default BackButton;
