import React from 'react';

/** Utils */
import cx from 'classnames';

/** Styles */
import * as s from './s.module.scss';

const Button = ({ children, onClick, className = '', disable }) => {
  return (
    <button disabled={disable} className={cx(s.btn, className)} onClick={() => !disable && onClick && onClick()}>
      {children}
    </button>
  )
}

export default Button;
