import React, { useState } from 'react';

/** Components */
import Calculator from './component/calculator';

/** Styles */
import * as s from './s.module.scss';

const RightSection = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={s.container}>
      <Calculator />
    </div>
  )
}

export default RightSection;
