export const LAYOUT = [
  [
    { value: 'c', type: 'clear' },
    { value: '+/-', type: 'change_sign' },
    { value: '()', type: 'bracket' },
    { value: '<-', type: 'backspace' },
  ],
  [
    { value: '1', type: 'operan' },
    { value: '2', type: 'operan' },
    { value: '3', type: 'operan' },
    { value: '+', type: 'operator' },
  ],
  [
    { value: '4', type: 'operan' },
    { value: '5', type: 'operan' },
    { value: '6', type: 'operan' },
    { value: '-', type: 'operator' },
  ],
  [
    { value: '7', type: 'operan' },
    { value: '8', type: 'operan' },
    { value: '9', type: 'operan' },
    { value: '*', type: 'operator' },
  ],
  [
    { value: '.', type: 'operan' },
    { value: '0', type: 'operan' },
    { value: '=', type: 'eval' },
    { value: '/', type: 'operator' },
  ],
]