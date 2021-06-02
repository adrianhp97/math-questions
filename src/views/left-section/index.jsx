import React, { useCallback, useState, useMemo } from 'react';

/** Hooks */
import { useQuestion } from './hooks/useQuestion';

/** Components */
import QuestionMultipleChoice from './component/question-multiplechoice';
import QuestionFreeText from './component/question-freetext';
import Button from '_shared/button';
import Radio from '_shared/form/radio';

/** Utils */
import cx from 'classnames';

/** Store */
import { usePageDispatch, ACTION_TYPE } from '_shared/toast/store';

/** Constants */
import { QUESTION_TYPE, QUESTION_TYPE_ENUM } from './constants';

/** Styles */
import * as s from './s.module.scss';

const LeftSection = () => {
  const [selectedType, setSelectedType] = useState(QUESTION_TYPE_ENUM.MultipleChoice);

  const {
    currentAnswer,
    currentQuestion,
    currentIdx,
    answers,
    questionList,
    type,
    start,
    setCurrentAnswer,
    isFirstQuestion,
    isLastQuestion,
    next,
    prev,
    jumpTo,
    setFinish,
    finish,
  } = useQuestion();

  const totalAnswered = useMemo(() => {
    return Object.values(answers).filter(item => item.submited).length;
  }, [answers]);

  const totalCorrect = useMemo(() => {
    return Object.entries(answers).filter(([key, value]) => value.submited && value.answer === questionList[key].answer).length;
  }, [answers, questionList]);

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
      if (!isLastQuestion) {
        next()
      } else {
        const selectedQuestion = questionList.findIndex((item, idx) => {
          if (!(idx in currentAnswer) || !currentAnswer[idx].submited) return true
          return false
        });
        if (selectedQuestion >= 0) {
          jumpTo(selectedQuestion);
        }
      }
    } catch (error) {
      console.log(error)
    }
  }, [
    currentQuestion,
    currentAnswer,
    setCurrentAnswer,
    next,
    pageDispatch,
    isLastQuestion,
    jumpTo,
    questionList,
  ]);

  return ( 
    <div className={s.container}>
      {
        questionList.length && !finish ? (
          <>
            <div className={s.poin}>
              <div>Total Answered: {totalAnswered} / {questionList.length}</div>
              <div>Correct Answer: {totalCorrect} / {totalAnswered}</div>
              <div>Question Number: {currentIdx + 1}</div>
            </div>
            <div className={s.reset}>
              <Button onClick={() => setFinish(true)}>
                Finish
              </Button>
            </div>
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
                  disable={currentAnswer.submited || !currentAnswer.answer}
                >
                  Submit
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className={s.questionWrapper}>
            {
              questionList.length && finish ? (
                <div className={cx(s.result, (totalCorrect / questionList.length) > 0.5 ? s.success : s.error)}>
                  <div>Correct Answer: {totalCorrect} / {questionList.length}</div>
                </div>
              ) : null
            }
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
