import React, { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "./ProductData";

const ProductSection = () => {
  const productRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [ScrollTrigger]);
  useLayoutEffect(() => {
    const products = productRef.current.querySelectorAll(".product");
    products.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: -500, duration: 3 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: item,
            start: "0% 10%",
            end: "bottom 50%",
            // markers: true,
            scrub: 2,
            toggleActions: "restart pause reverse pause",
          },
          duration: 4,
        }
      );
    });
  }, []);
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
