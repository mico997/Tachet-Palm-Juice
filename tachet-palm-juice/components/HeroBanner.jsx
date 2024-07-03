import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <h1 className="beats-solo">
          Experience the Refreshing Taste of Palm Juice
        </h1>
        <p>
          {" "}
          Discover the pure and natural goodness of Tachet Palm Juice, made from
          the finest organic palm trees. Savor the rich flavors and enjoy the
          health benefits.
        </p>
        <img
          // src={urlFor(heroBanner.image)}
          // alt="palm-juice"
          className="hero-banner-image"
        />
        <div>
          <Link href={"/product/ID/${heroBanner.product}"}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>{/*Description*/}</h5>
            <p>{/*heroBanner.des*/}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
