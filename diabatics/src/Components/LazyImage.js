import React from 'react';

function LazyImage({ src, alt }) {
  return <img src={src} alt={alt} />;
}

export default LazyImage;
