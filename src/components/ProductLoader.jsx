import React from "react";
import ContentLoader from "react-content-loader";

const ProductLoader = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={500}
    viewBox="0 0 300 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="16" y="29" rx="8" ry="8" width="258" height="305" />
    <rect x="16" y="342" rx="8" ry="8" width="258" height="35" />
    <rect x="16" y="386" rx="8" ry="8" width="258" height="24" />
    <rect x="16" y="425" rx="8" ry="8" width="258" height="50" />
  </ContentLoader>
);

export default ProductLoader;
