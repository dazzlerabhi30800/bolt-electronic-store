import React, { useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "react-bootstrap-icons";

const Showcase = () => {
  const [allowShift, setAllowShift] = useState(true);
  const [positionX, setPositionX] = useState(0);
  const [positionInitial, setPositionInitial] = useState(0);
  let threshold = 100;
  const [counter, setCounter] = useState(0);
  const showcaseRef = useRef();

  const changeShowcaseItem = (dir, action) => {
    let posInitial = 0;
    let slideSize = showcaseRef.current.children[0].offsetWidth;
    showcaseRef.current.classList.add("sliding");
    if (allowShift) {
      if (!action) {
        posInitial = showcaseRef.current.offsetLeft;
        setPositionInitial(posInitial);
      }
      if (dir === 1) {
        showcaseRef.current.style.left = positionInitial - slideSize + "px";
        setCounter((prevState) => prevState + 1);
      } else if (dir === -1) {
        showcaseRef.current.style.left = positionInitial + slideSize + "px";
        setCounter((prevState) => prevState - 1);
      }
    }
    setAllowShift(false);
  };

  const dragStart = (e) => {
    let posX1 = 0;
    e = e || window.event;
    let posInitial = showcaseRef.current.offsetLeft;
    setPositionInitial(posInitial);
    if (e.type === "touchstart") {
      posX1 = e.touches[0].clientX;
      setPositionX(posX1);
    } else {
      posX1 = e.clientX;
      setPositionX(posX1);
      document.onmousemove = dragAction;
      document.onmouseup = dragEnd;
    }
  };
  const dragAction = (e) => {
    let posX2 = 0;
    e = e || window.event;
    let posX1 = positionX;
    if (e.type === "touchmove") {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
      setPositionX(posX1);
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
      setPositionX(posX1);
    }
    showcaseRef.current.style.left =
      showcaseRef.current.offsetLeft - posX2 + "px";
  };

  const dragEnd = () => {
    let posFinal = showcaseRef.current.offsetLeft;
    let posInitial = positionInitial;
    if (posFinal - posInitial < threshold) {
      changeShowcaseItem(1, "drag");
    } else if (posFinal - posInitial > threshold) {
      changeShowcaseItem(-1, "drag");
    } else {
      showcaseRef.current.style.left = posInitial + "px";
    }
    document.onmouseup = null;
    document.onmousedown = null;
  };

  const checkIndex = () => {
    showcaseRef.current.classList.remove("sliding");
    let showSize = showcaseRef.current.children.length - 2;
    let slideSize = showcaseRef.current.children[0].offsetWidth;
    if (counter === -1) {
      showcaseRef.current.style.left = -(showSize * slideSize) + "px";
      setCounter(showSize - 1);
    }
    if (counter === showcaseRef.current.children.length - 2) {
      showcaseRef.current.style.left = -(1 * slideSize) + "px";
      setCounter(0);
    }
    setAllowShift(true);
  };

  useEffect(() => {
    hello();
  }, []);
  const hello = () => {
    let showcase = document.querySelector(".showcase--carousel");
    let firstSlide = showcase.childNodes[0];
    let lastSlide = showcase.childNodes[showcase.childNodes.length - 1];
    let cloneFirst = firstSlide.cloneNode(true);
    let cloneLast = lastSlide.cloneNode(true);
    showcase.appendChild(cloneFirst);
    showcase.insertBefore(cloneLast, firstSlide);
  };

  return (
    <div className="showcase--section">
      <div
        className="showcase--carousel"
        onTransitionEnd={checkIndex}
        ref={showcaseRef}
        onTouchStart={dragStart}
        onTouchEnd={dragEnd}
        onTouchMove={dragAction}
      >
        <div>Carousel-1</div>
        <div>Carousel-2</div>
        <div>Carousel-3</div>
        <div>Carousel-4</div>
      </div>
      <div className="button--wrapper">
        <CaretLeft
          className="btn left"
          onClick={() => changeShowcaseItem(-1)}
        />
        <CaretRight
          className="btn right"
          onClick={() => changeShowcaseItem(1)}
        />
      </div>
    </div>
  );
};

export default Showcase;