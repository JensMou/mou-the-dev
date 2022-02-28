import { useState, useEffect, useCallback } from "react";

export const useScroll = () => {
  const [state, setState] = useState({
    lastScrollTop: 0,
    bodyOffset: document.body.getBoundingClientRect(),
    scrollY: document.body.getBoundingClientRect().top,
    scrollX: document.body.getBoundingClientRect().left,
    scrollDirection: "",
  });

  const handleScrollEvent = useCallback((e) => {
    setState((prevState) => {
      const prevLastScrollTop = prevState.lastScrollTop;
      const bodyOffset = document.body.getBoundingClientRect();

      return {
        lastScrollTop: -bodyOffset.top,
        bodyOffset: bodyOffset,
        scrollY: -bodyOffset.top,
        scrollX: bodyOffset.left,
        scrollDirection: prevLastScrollTop > -bodyOffset.top ? "down" : "up",
      };
    });
  }, []);

  useEffect(() => {
    const scrollListener = (e: any) => {
      handleScrollEvent(e);
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [handleScrollEvent]);

  const arr = document.getElementsByTagName("body");
  const element = arr[0];
  const height = element.scrollHeight - element.clientHeight;

  let percentageHeight = Math.round(
    (-element.getBoundingClientRect().top / height) * 100
  );

  let sum = 0;
  if (Math.sign(percentageHeight)) {
    if (percentageHeight < 101) {
      sum = percentageHeight;
    } else {
      sum = 100;
    }
  }
  return {
    scrollY: state.scrollY,
    scrollX: state.scrollX,
    scrollDirection: state.scrollDirection,
    percentageHeight: sum,
  };
};

export default useScroll;
