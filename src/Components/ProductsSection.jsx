import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "./ProductData";

const ProductSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [changeAnim, setChangeAnim] = useState(false);
  const productRef = useRef();
  useEffect(() => {
    if (window.innerWidth >= 950) {
      setChangeAnim(true);
    } else {
      setChangeAnim(false);
    }
  }, [changeAnim]);
  useLayoutEffect(() => {
    const products = productRef.current.querySelectorAll(".product");
    if (changeAnim) {
      gsap.fromTo(
        productRef.current,
        { opacity: 0, y: -900 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: productRef.current,
            start: "0% 100%",
            end: "bottom 90%",
            // markers: true,
            scrub: true,
          },
          duration: 4,
        }
      );
    } else {
      products.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: -500 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: item,
              start: "0% 100%",
              end: "bottom 90%",
              // markers: true,
              scrub: true,
            },
            duration: 4,
          }
        );
      });
    }
  }, [changeAnim]);
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 950) {
      setChangeAnim(true);
    } else {
      setChangeAnim(true);
    }
  });
  return (
    <div className="product--section" ref={productRef}>
      {data.map((item, i) => {
        return (
          <div className={`product ${item.alt}`} key={i}>
            <div className="product--info">
              <h3>{item.heading}</h3>
              <p>Trends</p>
              <span>{item.discount}% off</span>
            </div>
            <img
              src={item.image}
              alt={item.alt}
              className="product--img"
              aria-hidden="true"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductSection;
