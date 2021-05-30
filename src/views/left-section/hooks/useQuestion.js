/** Hooks */
import { useState, useCallback, useEffect, useMemo } from 'react';

/** Utils */
import { shuffle } from '_shared/utils/shuffle';

/** Constants */
import {
  QUESTIONS,
  SAVED_QUESTION_LIST,
  SAVED_CURRENT_QUESTION,
  SAVED_ANSWERS,
  SAVED_TYPE,
  SAVED_FINISH,
  QUESTION_TYPE_ENUM,
} from '../constants';

export const useQuestion = () => {
  const [currentIdx, setCurrentIdx] = useState(JSON.parse(sessionStorage.getItem(SAVED_CURRENT_QUESTION)) || 0);
  const [questionList, setQuestionList] = useState(JSON.parse(sessionStorage.getItem(SAVED_QUESTION_LIST)) || []);
  const [answers, setAnswers] = useState(JSON.parse(sessionStorage.getItem(SAVED_ANSWERS)) || {});
  const [type, setType] = useState(JSON.parse(sessionStorage.getItem(SAVED_TYPE)) || QUESTION_TYPE_ENUM.MultipleChoice);
  const [isFinish, setIsFinish] = useState(JSON.parse(sessionStorage.getItem(SAVED_FINISH)));

  const currentQuestion = useMemo(() => {
    if (currentIdx >= questionList.length) return null
    return questionList[currentIdx]
  }, [currentIdx, questionList]);

  const currentAnswer = useMemo(() => {
    return answers[currentIdx] || {};
  }, [answers, currentIdx,]);

  const isFirstQuestion = useMemo(() => currentIdx === 0, [currentIdx]);
  const isLastQuestion = useMemo(() => currentIdx === questionList.length - 1, [currentIdx, questionList]);

  const finish = useMemo(() => {
    return isFinish || Object.values(answers).filter(item => item.submited).length === questionList.length
  }, [isFinish, questionList, answers])

  const start = (type = QUESTION_TYPE_ENUM.MultipleChoice) => {
    try {
      const questions = shuffle(QUESTIONS).map(item => ({
        ...item,
        choices: shuffle(item.choices),
      })).slice(0, 10);
      setIsFinish(false)
      setQuestionList(questions);
      setCurrentIdx(0);
      setAnswers({});
      setType(type)
    } catch (error) {
      console.log(error)
    }
  }

  const reset = () => {
    setCurrentIdx(0);
    setQuestionList([]);
    setAnswers({});
    setType(QUESTION_TYPE_ENUM.MultipleChoice);
    sessionStorage.removeItem(SAVED_FINISH)
  }

  const jumpTo = useCallback((questionNumber) => {
    try {
      if (questionNumber >= questionList.length) {
        setCurrentIdx(questionList.length - 1)
      } else if (questionNumber < 0) {
        setCurrentIdx(0)
      } else {
        setCurrentIdx(questionNumber)
      }
    } catch (error) {
      console.log(error);
    }
  }, [questionList])

  const next = useCallback(() => {
    try {
      jumpTo(currentIdx + 1)
    } catch (error) {
      console.log(error)
    }
  }, [currentIdx, jumpTo])

  const prev = useCallback(() => {
    try {
      jumpTo(currentIdx - 1)
    } catch (error) {
      console.log(error)
    }
  }, [currentIdx, jumpTo])

  const setCurrentAnswer = useCallback((answer, submited = false) => {
    try {
      setAnswers({
        ...answers,
        [currentIdx]: {
          answer,
          submited
        }
      })
    } catch (error) {
      console.log(error)
    }
  }, [currentIdx, answers]);

  const setFinish = () => {
    setIsFinish(true)
  }

  useEffect(() => {
    sessionStorage.setItem(SAVED_QUESTION_LIST, JSON.stringify(questionList));
  }, [questionList])

  useEffect(() => {
    sessionStorage.setItem(SAVED_CURRENT_QUESTION, JSON.stringify(currentIdx));
  }, [currentIdx])

  useEffect(() => {
    sessionStorage.setItem(SAVED_ANSWERS, JSON.stringify(answers));
  }, [answers])

  useEffect(() => {
    sessionStorage.setItem(SAVED_TYPE, JSON.stringify(type));
  }, [type])

  useEffect(() => {
    sessionStorage.setItem(SAVED_FINISH, JSON.stringify(isFinish));
  }, [isFinish])

  return {
    questionList,
    answers,
    currentIdx,
    currentQuestion,
    currentAnswer,
    isFirstQuestion,
    isLastQuestion,
    start,
    reset,
    jumpTo,
    next,
    prev,
    type,
    setCurrentAnswer,
    finish,
    setFinish,
  }
}
