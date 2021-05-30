import React from 'react';

/** Utils */
import cx from 'classnames';

/** Styles */
import * as s from './s.module.scss';

const Button = ({ children, onClick, className = '', disable, block }) => {
  return (
    <button disabled={disable} className={cx(s.btn, block && s.block, className)} onClick={() => !disable && onClick && onClick()}>
      {children}
    </button>
  )
}

export default Button;
