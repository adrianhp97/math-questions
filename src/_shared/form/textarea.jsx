import React from 'react';

/** Utils */
import cx from 'classnames';

/** Styles */
import * as s from './s.module.scss';

const Textarea = ({ rows = 5, disable, value, onChange, className }) => {
  return (
    <textarea
      className={cx(s.textarea, className)}
      rows={rows}
      disabled={disable}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  )
}

export default Textarea;
