import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const headphoneImg = useRef();
  const infoRef = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      headphoneImg.current,
      {
        x: 500,
        opacity: 0,
      },
      { x: 0, opacity: 1, duration: 4, ease: "elastic.out(1, 0.4)" }
    );

    gsap.fromTo(
      infoRef.current,
      {
        x: -500,
        opacity: 0,
      },
      { x: 0, opacity: 1, ease: "elastic.out(1, 0.4)", duration: 4 },
      "<"
    );
  });
  return (
    <div className="hero--section">
      <div className="info" ref={infoRef}>
        <h1>Beats Solo</h1>
        <span>Wireless</span>
        <span className="main--heading">Headphones</span>
        <div className="description">
          <h2>Description</h2>
          <p>New Cosmic Byte Gaming Headhone with Mic and RGB Lightning.</p>
        </div>
        <button className="buy--btn">Buy Now</button>
      </div>
      <div className="product--img" ref={headphoneImg}>
        <img
          src="/assets/headphones/headphone-4.png"
          alt="headphone"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default HeroSection;
