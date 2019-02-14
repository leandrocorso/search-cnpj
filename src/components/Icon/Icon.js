import React from 'react';
import iconPackage from './package.svg';

const Icon = ({ src, ...rest }) => (
  <svg {...rest}>
    <use xlinkHref={`${iconPackage}#icon-${src}`} />
  </svg>
);

export default Icon;
