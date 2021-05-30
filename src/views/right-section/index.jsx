import React from 'react';

/** Components */
import Calculator from './component/calculator';

/** Styles */
import * as s from './s.module.scss';

const RightSection = () => {
  return (
    <div className={s.container}>
      <Calculator />
    </div>
  )
}

export default RightSection;
