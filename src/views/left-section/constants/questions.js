export const QUESTION_TYPE_ENUM = {
  MultipleChoice: 'multiplechoice',
  FreeText: 'freetext',
}

export const QUESTION_TYPE = [
  { label: 'Multiple Choice', value: QUESTION_TYPE_ENUM.MultipleChoice },
  { label: 'Free Text', value: QUESTION_TYPE_ENUM.FreeText },
]

export const QUESTIONS = [
  {
    id: 1,
    question: 'Ariel was playing basketball. 1 of her shots went in the hoop. 2 of her shots did not go in the hoop. How many shots were there in total?',
    answer: '3',
    choices: ['1', '2', '3', '4']
  },
  {
    id: 2,
    question: 'Adrianna has 10 pieces of gum to share with her friends. There wasn’t enough gum for all her friends, so she went to the store to get 3 more pieces of gum. How many pieces of gum does Adrianna have now?',
    answer: '13',
    choices: ['10', '13', '15', '17']
  },
  {
    id: 3,
    question: 'Adrianna has 10 pieces of gum to share with her friends. There wasn’t enough gum for all her friends, so she went to the store and got 70 pieces of strawberry gum and 10 pieces of bubble gum. How many pieces of gum does Adrianna have now?',
    answer: '90',
    choices: ['90', '80', '70', '20']
  },
  {
    id: 4,
    question: 'The restaurant has 175 normal chairs and 20 chairs for babies. How many chairs does the restaurant have in total?',
    answer: '195',
    choices: ['175', '20', '195', '155']
  },
]
