import React, { useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "react-bootstrap-icons";

const Showcase = () => {
  const [allowShift, setAllowShift] = useState(true);
  const [positionX, setPositionX] = useState(0);
  const [positionInitial, setPositionInitial] = useState(0);
  let newPosInitial = 0;
  let threshold = 100;
  const [counter, setCounter] = useState(0);
  const showcaseRef = useRef();

  const changeShowcaseItem = (dir, action) => {
    showcaseRef.current.classList.add("sliding");
    let posInitial = 0;
    let slideSize = showcaseRef.current.children[0].offsetWidth;
    if (allowShift) {
      if (!action) {
        posInitial = showcaseRef.current.offsetLeft;
        newPosInitial = posInitial;

        if (dir === 1) {
          showcaseRef.current.style.left = newPosInitial - slideSize + "px";
          setCounter((prevState) => prevState + 1);
        } else if (dir === -1) {
          showcaseRef.current.style.left = newPosInitial + slideSize + "px";
          setCounter((prevState) => prevState - 1);
        }
      } else {
        if (dir === 1) {
          showcaseRef.current.style.left = positionInitial - slideSize + "px";
          setCounter((prevState) => prevState + 1);
        } else if (dir === -1) {
          showcaseRef.current.style.left = positionInitial + slideSize + "px";
          setCounter((prevState) => prevState - 1);
        }
      }
    }
    setAllowShift(false);
  };

  const checkIndex = () => {
    showcaseRef.current.classList.remove("sliding");
    const animContainer = document.querySelectorAll(".showcase--container");
    animContainer.forEach((anim) => anim.classList.remove("slide"));
    animContainer[counter + 1].classList.add("slide");
    let showSize = showcaseRef.current.children.length - 2;
    let slideSize = showcaseRef.current.children[0].offsetWidth;
    if (counter === -1) {
      showcaseRef.current.style.left = -(showSize * slideSize) + "px";
      setCounter(showSize - 1);
    }
    if (counter === showSize) {
      showcaseRef.current.style.left = -(1 * slideSize) + "px";
      setCounter(0);
    }
    setAllowShift(true);
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
    console.log(showcaseRef.current.offsetLeft);
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
    const animContainer = document.querySelectorAll(".showcase--container");
    animContainer.forEach((anim) => anim.classList.remove("slide"));
    animContainer[counter + 1].classList.add("slide");
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
        <div className="showcase first">
          <div className="showcase--container">
            <div className="sale--img">
              <img
                src="./assets/headphones/girl-with-headphone.png"
                alt="headphones for sale"
                aria-hidden="true"
              />
            </div>
            <div className="sale--container">
              <h4>New Skull Candy Wireless in Stock.</h4>
            </div>
          </div>
        </div>
        <div className="showcase second">
          <div className="showcase--container">
            <div className="sale--img">
              <img
                src="./assets/PC/laptop-3.png"
                alt="headphones for sale"
                aria-hidden="true"
              />
            </div>
            <div className="sale--container">
              <h4>New Gaming Laptop Series with Latest 4080 RTX.</h4>
            </div>
          </div>
        </div>
        <div className="showcase third">
          <div className="showcase--container">
            <div className="sale--img">
              <img
                src="./assets/PC/cabinet-2.png"
                alt="cabinets for sale"
                aria-hidden="true"
              />
            </div>
            <div className="sale--container">
              <h4>Build OR Buy your own Gaming PC Build.</h4>
            </div>
          </div>
        </div>
        <div className="showcase fourth">
          <div className="showcase--container">
            <div className="sale--img">
              <img
                src="./assets/watches/watch-2.png"
                alt="cabinets for sale"
                aria-hidden="true"
              />
            </div>
            <div className="sale--container">
              <h4>New Smart Waches Launch Live Now!</h4>
            </div>
          </div>
        </div>
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
