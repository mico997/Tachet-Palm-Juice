import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="content-container">
        <h1>Experience the Refreshing Taste of Palm Juice</h1>
        <p>
          Discover the pure and natural goodness of Tachet Palm Juice, made from
          the finest organic palm trees. Savor the rich flavors and enjoy the
          health benefits.
        </p>
        <div className="hero-banner-button">
          <Link href={"/product/ID/${heroBanner.product}"}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <Link href={"/product/ID/${heroBanner.product}"}>
            <button type="button">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
