import React from 'react';

/** Utils */
import cx from 'classnames';

/** Styles */
import * as s from './s.module.scss';

const Card = ({ children, className }) => {
  return (
    <div className={cx(s.card, className)}>
      {children}
    </div>
  );
}

export default Card;
