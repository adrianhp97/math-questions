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
    type: 'addition',
    answer: '3',
    choices: ['1', '2', '3', '4']
  },
  {
    id: 2,
    question: 'Adrianna has 10 pieces of gum to share with her friends. There wasn’t enough gum for all her friends, so she went to the store to get 3 more pieces of gum. How many pieces of gum does Adrianna have now?',
    type: 'addition',
    answer: '13',
    choices: ['10', '13', '15', '17']
  },
  {
    id: 3,
    question: 'Adrianna has 10 pieces of gum to share with her friends. There wasn’t enough gum for all her friends, so she went to the store and got 70 pieces of strawberry gum and 10 pieces of bubble gum. How many pieces of gum does Adrianna have now?',
    type: 'addition',
    answer: '90',
    choices: ['90', '80', '70', '20']
  },
  {
    id: 4,
    question: 'The restaurant has 175 normal chairs and 20 chairs for babies. How many chairs does the restaurant have in total?',
    type: 'addition',
    answer: '195',
    choices: ['175', '20', '195', '155']
  },
  {
    id: 5,
    question: 'How many cookies did you sell if you sold 320 chocolate cookies and 270 vanilla cookies?',
    type: 'addition',
    answer: '590',
    choices: ['590', '50', '270', '320']
  },
  {
    id: 6,
    question: 'The hobby store normally sells 10,576 trading cards per month. In June, the hobby store sold 15,498 more trading cards than normal. In total, how many trading cards did the hobby store sell in June?',
    type: 'addition',
    answer: '26074',
    choices: ['26074', '25074', '25570', '26070']
  },
  {
    id: 7,
    question: 'Billy had 2 books at home. He went to the library to take out 2 more books. He then bought 1 book. How many books does Billy have now?',
    type: 'addition',
    answer: '5',
    choices: ['5', '4', '3', '2']
  },
  {
    id: 8,
    question: 'Ashley bought a big bag of candy. The bag had 102 blue candies, 100 red candies and 94 green candies. How many candies were there in total?',
    type: 'addition',
    answer: '296',
    choices: ['296', '294', '292', '290']
  },
  {
    id: 9,
    question: 'There were 3 pizzas in total at the pizza shop. A customer bought 1 pizza. How many pizzas are left?',
    type: 'subtraction',
    answer: '5',
    choices: ['5', '4', '3', '2']
  },
  {
    id: 10,
    question: 'Your friend said she had 11 stickers. When you helped her clean her desk, she only had a total of 10 stickers. How many stickers are missing?',
    type: 'subtraction',
    answer: '1',
    choices: ['1', '4', '3', '2']
  },
  {
    id: 11,
    question: 'Adrianna has 100 pieces of gum to share with her friends. When she went to the park, she shared 10 pieces of strawberry gum. When she left the park, Adrianna shared another 10 pieces of bubble gum. How many pieces of gum does Adrianna have now?',
    type: 'subtraction',
    answer: '80',
    choices: ['80', '70', '90', '100']
  },
  {
    id: 12,
    question: 'Your team scored a total of 123 points. 67 points were scored in the first half. How many were scored in the second half?',
    type: 'subtraction',
    answer: '56',
    choices: ['56', '67', '123', '50']
  },
  {
    id: 13,
    question: 'Nathan has a big ant farm. He decided to sell some of his ants. He started with 965 ants. He sold 213. How many ants does he have now?',
    type: 'subtraction',
    answer: '56',
    choices: ['56', '67', '123', '50']
  },
  {
    id: 14,
    question: 'The hobby store normally sells 10,576 trading cards per month. In July, the hobby store sold a total of 20,777 trading cards. How many more trading cards did the hobby store sell in July compared with a normal month?',
    type: 'subtraction',
    answer: '10201',
    choices: ['10201', '10200', '10202', '10199']
  },
  {
    id: 15,
    question: 'Charlene had a pack of 35 pencil crayons. She gave 6 to her friend Theresa. She gave 3 to her friend Mandy. How many pencil crayons does Charlene have left?',
    type: 'subtraction',
    answer: '26',
    choices: ['26', '24', '22', '28']
  },
  {
    id: 16,
    question: 'Ashley bought a big bag of candy to share with her friends. In total, there were 296 candies. She gave 105 candies to Marissa. She also gave 86 candies to Kayla. How many candies were left?',
    type: 'subtraction',
    answer: '105',
    choices: ['100', '105', '101', '106']
  },
  {
    id: 17,
    question: 'Adrianna needs to cut a pan of brownies into pieces. She cuts 6 even columns and 3 even rows into the pan. How many brownies does she have?',
    type: 'multiplication',
    answer: '18',
    choices: ['18', '2', '12', '20']
  },
  {
    id: 18,
    question: 'A movie theatre has 25 rows of seats with 20 seats in each row. How many seats are there in total?',
    type: 'multiplication',
    answer: '500',
    choices: ['500', '50', '40', '250']
  },
  {
    id: 19,
    question: 'A clothing company has 4 different kinds of sweatshirts. Each year, the company makes 60,000 of each kind of sweatshirt. How many sweatshirts does the company make each year?',
    type: 'multiplication',
    answer: '240000',
    choices: ['240000', '300000', '180000', '60000']
  },
  {
    id: 20,
    question: 'A bricklayer stacks bricks in 2 rows, with 10 bricks in each row. On top of each row, there is a stack of 6 bricks. How many bricks are there in total?',
    type: 'multiplication',
    answer: '120',
    choices: ['120', '18', '70', '22']
  },
  {
    id: 21,
    question: 'Cayley earns $5 an hour by delivering newspapers. She delivers newspapers 3 days each week, for 4 hours at a time. After delivering newspapers for 8 weeks, how much money will Cayley earn?',
    type: 'multiplication',
    answer: '480',
    choices: ['480', '60', '160', '96']
  },
  {
    id: 22,
    question: 'If you have 4 pieces of candy split evenly into 2 bags, how many pieces of candy are in each bag?',
    type: 'division',
    answer: '2',
    choices: ['2', '4', '1', '8']
  },
  {
    id: 23,
    question: 'If you have 80 tickets for the fair and each ride costs 5 tickets, how many rides can you go on?',
    type: 'division',
    answer: '16',
    choices: ['16', '12', '10', '8']
  },
  {
    id: 24,
    question: 'The school has $20,000 to buy new computer equipment. If each piece of equipment costs $50, how many pieces can the school buy in total?',
    type: 'division',
    answer: '400',
    choices: ['400', '200', '50', '100']
  },
  {
    id: 25,
    question: 'Melissa buys 2 packs of tennis balls for $12 in total. All together, there are 6 tennis balls. How much does 1 tennis ball cost?',
    type: 'division',
    answer: '1',
    choices: ['1', '2', '3', '4']
  },
  {
    id: 26,
    question: 'An Italian restaurant receives a shipment of 86 veal cutlets. If it takes 3 cutlets to make a dish, how many cutlets will the restaurant have left over after making as many dishes as possible?',
    type: 'division',
    answer: '2',
    choices: ['1', '2', '3', '4']
  },
  {
    id: 27,
    question: 'There are 235 books in a library. On Monday, 123 books are taken out. On Tuesday, 56 books are brought back. How many books are there now?',
    type: 'mixing',
    answer: '168',
    choices: ['165', '168', '414', '56']
  },
  {
    id: 28,
    question: 'There is a group of 10 people who are ordering pizza. If each person gets 2 slices and each pizza has 4 slices, how many pizzas should they order?',
    type: 'mixing',
    answer: '5',
    choices: ['5', '6', '4', '3']
  },
  {
    id: 29,
    question: 'Lana has 2 bags with 2 marbles in each bag. Markus has 2 bags with 3 marbles in each bag. How many more marbles does Markus have?',
    type: 'mixing',
    answer: '2',
    choices: ['5', '2', '4', '3']
  },
  {
    id: 30,
    question: 'Lana has 3 bags with the same amount of marbles in them, totaling 12 marbles. Markus has 3 bags with the same amount of marbles in them, totaling 18 marbles. How many more marbles does Markus have in each bag?',
    type: 'mixing',
    answer: '6',
    choices: ['5', '6', '4', '3']
  },
  {
    id: 31,
    question: 'There are 2 chalkboards in your classroom. If each chalkboard needs 2 pieces of chalk, how many pieces do you need in total?',
    type: 'ordering',
    answer: '4',
    choices: ['5', '6', '4', '3']
  },
  {
    id: 32,
    question: 'There are 3 chalkboards in your classroom. Each chalkboard has 2 pieces of chalk. This means there are 6 pieces of chalk in total. If you take 1 piece of chalk away from each chalkboard, how many will there be in total?',
    type: 'ordering',
    answer: '3',
    choices: ['5', '6', '4', '3']
  },
  {
    id: 33,
    question: 'What number is 6 tens and 10 ones?',
    type: 'ordering',
    answer: '70',
    choices: ['70', '60', '50', '80']
  },
  {
    id: 34,
    question: 'I have a 7 in the tens place. I have an even number in the ones place. I am lower than 74. What number am I?',
    type: 'ordering',
    answer: '72',
    choices: ['70', '72', '74', '68']
  },
]
