import React, { useState } from 'react';

/** Components  */
import Button from '_shared/button';

/** Constants */
import { LAYOUT } from './constants';

/** Styles */
import * as s from './s.module.scss';

const Calculator = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  return (
    <div className={s.calculator}>
      <table>
        <tbody>
          <tr>
            <td colSpan={4}>
              <input type="text" className={s.monitor} value={value}  onChange={(e) => setValue(e.target.value)} />
            </td>
          </tr>
          {
            LAYOUT.map((row, idx) => (
              <tr key={`row-${idx}`}>
                {
                  row.map((cell, jdx) => (
                    <td key={`cell-${jdx}`}>
                      <Button
                        className={s.operan}
                        onClick={() => {
                          switch(cell) {
                            case 'c':
                              setValue('');
                              break
                            case '=':
                              try {
                                // eslint-disable-next-line no-eval
                                setValue(eval(value) || '');
                              } catch (error) {
                                
                              }
                              break;
                            default:
                              setValue(value + cell)
                          }
                        }}
                      >
                        {cell}
                      </Button>
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Calculator;
