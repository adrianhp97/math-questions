import React, { useCallback, useState } from 'react';

/** Hooks */
import { useQuestion } from './hooks/useQuestion';

/** Components */
import QuestionMultipleChoice from './component/question-multiplechoice';
import QuestionFreeText from './component/question-freetext';
import Button from '_shared/button';
import Radio from '_shared/form/radio';

/** Store */
import { usePageDispatch, ACTION_TYPE } from '_shared/toast/store';

/** Constants */
import { QUESTION_TYPE, QUESTION_TYPE_ENUM } from './constants';

/** Styles */
import * as s from './s.module.scss';

const LeftSection = () => {
  const [selectedType, setSelectedType] = useState(null);
  
  const {
    currentAnswer,
    currentQuestion,
    questionList,
    type,
    start,
    setCurrentAnswer,
    isFirstQuestion,
    isLastQuestion,
    next,
    prev,
  } = useQuestion();

  const pageDispatch = usePageDispatch();

  const submitOneAnswer = useCallback(() => {
    try {
      setCurrentAnswer(currentAnswer.answer, true)
      if (currentAnswer.answer === currentQuestion.answer) {
        pageDispatch({
          type: ACTION_TYPE.ADD,
          payload: {
            type: 'success',
            message: 'Your answer is correct',
          }
        })
      } else {
        pageDispatch({
          type: ACTION_TYPE.ADD,
          payload: {
            type: 'error',
            message: `Your answer is incorrect, the correct answer is ${currentQuestion.answer}`,
          }
        })
      }
    } catch (error) {
      console.log(error)
    }
  }, [currentQuestion, currentAnswer, setCurrentAnswer, pageDispatch])

  return ( 
    <div className={s.container}>
      {
        questionList.length ? (
          <div className={s.questionWrapper}>
            {
              type === QUESTION_TYPE_ENUM.MultipleChoice ? (
                <QuestionMultipleChoice
                  question={currentQuestion}
                  answer={currentAnswer}
                  setAnswer={setCurrentAnswer}
                />
              ) : (
                <QuestionFreeText
                  question={currentQuestion}
                  answer={currentAnswer}
                  setAnswer={setCurrentAnswer}
                />
              )
            }

            <div className={s.actionWrapper}>
              {!isFirstQuestion && <Button onClick={() => prev()}>Prev</Button>}
              {!isLastQuestion && <Button onClick={() => next()}>Next</Button>}
              <Button
                onClick={() => submitOneAnswer()}
                disable={currentAnswer.submited}
              >
                Submit
              </Button>
            </div>
          </div>
        ) : (
          <div className={s.questionWrapper}>
            <div>
              {
                QUESTION_TYPE.map(qType => (
                  <Radio
                    key={qType.value}
                    value={qType.value}
                    label={qType.label}
                    checked={qType.value === selectedType}
                    onChange={(val) => setSelectedType(val)}
                  />
                ))
              }
            </div>
            <Button onClick={() => start(selectedType)}>Start</Button>
          </div>
        )
      }
    </div>
  )
}

export default LeftSection;
