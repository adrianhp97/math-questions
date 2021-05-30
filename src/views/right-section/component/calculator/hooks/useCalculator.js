/** Hooks */
import { useState, useCallback, useMemo, useRef } from 'react';

export const useCalculator = () => {
  // const [expression, setExpression] = useState('');
  const [history, setHistory] = useState([]);

  const [stack, setStack] = useState([]);

  const expression = useMemo(() => {
    return stack.join(' ');
  }, [stack])

  const value = useMemo(() => {
    try {
      if (expression === '') return ''
      // eslint-disable-next-line no-eval
      return eval(expression)
    } catch (error) {
      return ''
    }
  }, [expression]);

  const inputRef = useRef(null);
  
  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(expression);
      if (result) {
        setHistory([...history, {
          expression,
          stack,
          result,
        }]);
        setStack([`${result}`])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const addOperator = useCallback((operator) => {
    try {
      let newStack = [...stack];

      if (!newStack.length) return
      
      if (newStack[newStack.length - 1].match(/[0-9().]$/)) {
        newStack.push(operator);
      } else if (newStack[newStack.length - 1].match(/[*\-/+]$/)) {
        newStack[newStack.length - 1] = operator;
      }

      setStack(newStack);
    } catch (error) {
      console.log(error)
    }
  }, [stack])

  const addOperan = useCallback((operan) => {
    try {
      let newStack = [...stack];

      if (!newStack.length && operan !== '.') {
        newStack.push(operan);
      } else {
        if (operan === '.') {
          if (newStack[newStack.length - 1].match(/[0-9]$/) && !newStack[newStack.length - 1].includes('.')) {
            newStack[newStack.length - 1] += operan;
          }
        } else if (newStack[newStack.length - 1].match(/[0-9.]$/)) {
          newStack[newStack.length - 1] += operan;
        } else if (newStack[newStack.length - 1] === ')') {
          return
        } else {
          newStack.push(operan);
        }
      }

      setStack(newStack);
    } catch (error) {
      console.log(error)
    }
  }, [stack])

  const backspace = useCallback(() => {
    try {
      let newStack = [...stack];

      if (!newStack.length) return;

      newStack[newStack.length - 1] = newStack[newStack.length - 1].slice(0, -1);
      if (!newStack[newStack.length - 1].length) {
        newStack.pop()
      }

      setStack(newStack);
    } catch (error) {
      console.log(error)
    }
  }, [stack])

  const getRemainingBracket = useCallback(() => {
    let remainingBracket = [];
    stack
      .filter(item => item === '(' || item === ')')
      .forEach(bracket => {
        if (bracket === '(') {
          remainingBracket.push('(');
        } else {
          remainingBracket.pop();
        }
      });
    return remainingBracket;
  }, [stack])

  const addBracket = useCallback(() => {
    try {
      let newStack = [...stack];
      if (!newStack.length) {
        newStack.push('(')
      } else {
        if (newStack[newStack.length - 1] === '(') {
          newStack.push('(')
        } else if (newStack[newStack.length - 1].match(/[0-9.]$/) && newStack.length === 1) {
          newStack.unshift('(')
        } else if (newStack[newStack.length - 1].match(/[0-9.]$/) || newStack[newStack.length - 1] === ')') {
          let brackets = getRemainingBracket();
          if (brackets.length > 0) {
            newStack.push(')')
          }
        } else if (newStack[newStack.length - 1].match(/[*\-/+]$/)) {
          newStack.push('(')
        }
      }

      setStack(newStack);
    } catch (error) {
      console.log(error)
    }
  }, [stack, getRemainingBracket])

  const clear = (removeHistory = false) => {
    setStack([]);
    if (removeHistory) {
      setHistory([]);
    }
  }

  return {
    inputRef,
    history,
    value,
    expression, 
    calculate,
    addOperan,
    addOperator,
    backspace,
    addBracket,
    clear,
    setStack,
  }
}
