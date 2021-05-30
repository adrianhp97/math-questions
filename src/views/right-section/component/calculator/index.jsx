import React, { useState } from 'react';

/** Hooks */
import { useCalculator } from './hooks/useCalculator';

/** Components  */
import Button from '_shared/button';

/** Constants */
import { LAYOUT } from './constants';

/** Styles */
import * as s from './s.module.scss';

const Calculator = ({ onSubmit }) => {
  const [isHistory, setIsHistory] = useState(false);
  const {
    inputRef,
    value,
    expression,
    addOperan,
    addOperator,
    addBracket,
    calculate,
    backspace,
    clear,
    history,
    setStack,
  } = useCalculator();

  return (
    <div className={s.calculator}>
      <table>
        <tbody>
          <tr>
            <td colSpan={4}>
              <input
                type="text"
                className={s.monitor}
                value={value}
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <input
                ref={inputRef}
                type="text"
                className={s.monitor}
                value={expression}
                onChange={(e) => null}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <Button onClick={() => setIsHistory(!isHistory)} block={true}>
                {isHistory ? 'Go Back' : 'See History'}
              </Button>
            </td>
          </tr>
          {
            !isHistory ? LAYOUT.map((row, idx) => (
              <tr key={`row-${idx}`}>
                {
                  row.map((cell, jdx) => (
                    <td key={`cell-${jdx}`}>
                      <Button
                        className={s.operan}
                        onClick={() => {
                          switch(cell.type) {
                            case 'clear':
                              clear();
                              break
                            case 'clear_all':
                              clear(true);
                              break
                            case 'eval':
                              calculate();
                              break;
                            case 'operan':
                              addOperan(cell.value);
                              break;
                            case 'operator':
                              addOperator(cell.value);
                              break;
                            case 'bracket':
                              addBracket();
                              break;
                            case 'backspace':
                              backspace();
                              break;
                            default:
                              break;
                          }
                        }}
                      >
                        {cell.value}
                      </Button>
                    </td>
                  ))
                }
              </tr>
            )) : (
              <tr>
                <td colSpan={4}>
                  {
                    history.map((history, idx) => (
                      <div
                        key={`history-${idx}`}
                        className={s.historyWrapper}
                        onClick={() => setStack(history.stack)}
                      >
                        {history.expression} = {history.result}
                      </div>
                    ))
                  }
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Calculator;
