import React from 'react';

/** Components */
import Card from '_shared/card';
import Radio from '_shared/form/radio';

/** Styles */
import * as s from './s.module.scss'

const QuestionMultipleChoice = ({ question, answer, setAnswer }) => {
  return (
    <div className={s.questionMultipleChoice}>
      <Card>
        {question.question}
      </Card>
      {
        question.choices.map(choice => (
          <Radio
            key={choice}
            value={choice}
            label={choice}
            checked={choice === answer.answer}
            onChange={(val) => setAnswer(val, false)}
            disable={answer.submited}
            checkedClass={
              answer.submited ? 
                (question.answer === answer.answer ?  s.correct : s.incorrect) :
                ''
            }
          />
        ))
      }
    </div>
  )
}

export default QuestionMultipleChoice
