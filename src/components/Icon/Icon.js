import React from 'react';
import iconPackage from './package.svg';

const Icon = ({ src, ...rest }) => (
  <svg src={src} {...rest}>
    <use xlinkHref={`${iconPackage}#icon-${src}`} />
  </svg>
);

export default Icon;
