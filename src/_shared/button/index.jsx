import React from 'react';

/** Utils */
import cx from 'classnames';

/** Styles */
import * as s from './s.module.scss';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <div className={cx(s.btn, className)} onClick={() => onClick && onClick()}>
      {children}
    </div>
  )
}

export default Button;
