import React from "react";

import Link from "next/link";
import { urlFor } from "../lib/client";
import { FeaturedList } from "../constants";

const Featured = () => {
  return (
    <section className="">
      <div>
        <div>
          {FeaturedList.map((feature) => (
            <div key={feature.id}>
              <FeatureItem content={feature.content} image={feature.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ content, image }) => {
  return (
    <div>
      {content}
      <img src={image} width={250} height={250} />
    </div>
  );
};

export default Featured;
