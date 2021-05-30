import React from 'react';

/** Components */
import Card from '_shared/card';
import Textarea from '_shared/form/textarea';

/** Styles */
import * as s from './s.module.scss'

const QuestionFreeText = ({ question, answer, setAnswer }) => {
  const { answer: value } = answer

  return (
    <div className={s.questionFreeText}>
      <Card>
        {question.question}
      </Card>
      <Textarea
        value={value || ''}
        className={
          answer.submited ? 
            (question.answer === answer.answer ?  s.correct : s.incorrect) :
            ''
        }
        onChange={(val) => setAnswer(val, false)}
        disable={answer.submited}
      />
    </div>
  )
}

export default QuestionFreeText
