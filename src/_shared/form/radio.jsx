import React from 'react';

/** Utils */
import cx from 'classnames';

/** Styles */
import * as s from './s.module.scss';

const Radio = ({ disable, checked, label, value, onChange, checkedClass }) => {
  return (
    <label className={cx(s.radio, checked && s.checked, checked && checkedClass)} onClick={() => !disable && onChange && onChange(value)}>
      <input
        type="radio"
        value={value}
        onChange={() => !disable && onChange && onChange(value)}
        checked={true}
      />
      <div className={s.dot}></div>
      <div className={s.text}>{label}</div>
    </label>
  )
}

export default Radio;
