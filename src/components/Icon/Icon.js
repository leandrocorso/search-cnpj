import React from 'react';
import iconPackage from './package.svg';

const Icon = ({ src, ...rest }) => (
  <svg data-test="icon" src={src} {...rest}>
    <use xlinkHref={`${iconPackage}#icon-${src}`} />
  </svg>
);

export default Icon;
