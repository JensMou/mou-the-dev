import { useState, useEffect, useCallback } from "react";

export const useScroll = () => {
    const [state, setState] = useState({
        lastScrollTop: 0,
        bodyOffset: document.body.getBoundingClientRect(),
        scrollY: document.body.getBoundingClientRect().top,
        scrollX: document.body.getBoundingClientRect().left,
        scrollDirection: "",
    });

    const handleScrollEvent = useCallback(() => {
        setState((prevState) => {
            const prevLastScrollTop = prevState.lastScrollTop;
            const bodyOffset = document.body.getBoundingClientRect();

            return {
                lastScrollTop: -bodyOffset.top,
                bodyOffset: bodyOffset,
                scrollY: -bodyOffset.top,
                scrollX: bodyOffset.left,
                scrollDirection:
                    prevLastScrollTop > -bodyOffset.top ? "down" : "up",
            };
        });
    }, []);

    useEffect(() => {
        const scrollListener = (e: any) => {
            handleScrollEvent();
        };
        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, [handleScrollEvent]);

    const height =
        window.scrollY /
        (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);

    const sum = Math.round(height * 100);
    const percentageHeight = sum > 100 ? 100 : sum < 0 ? 0 : sum;
    return {
        scrollY: state.scrollY,
        scrollX: state.scrollX,
        scrollDirection: state.scrollDirection,
        percentageHeight,
    };
};

export default useScroll;
