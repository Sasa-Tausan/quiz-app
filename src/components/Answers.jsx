/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { shuffle } from '../assets/data';
import { iconCorrect, iconError } from '../assets/images';

// eslint-disable-next-line react/prop-types
const Answers = ({
  options,
  themeMode,
  userAnswer,
  isAnswerCorrect,
  dispatch,
  answer,
  isAnswerSubmitted,
}) => {
  const [shuffledAnswers, setShuffleAnswers] = useState([]);
  const letters = ['A', 'B', 'C', 'D'];

  useEffect(() => {
    const shuffledArray = shuffle(options);
    setShuffleAnswers(shuffledArray);
  }, [options]);

  const selectAnswer = (answer) => {
    dispatch({ type: 'SELECT_ANSWER', payload: answer });
  };

  return (
    <ul className='answers-list'>
      {shuffledAnswers.map((item, index) => {
        const isActive = userAnswer === item;
        const isCorrectAnswerClass = isActive && isAnswerCorrect;
        const isWrongAnswerClass = isActive && isAnswerCorrect === false;
        const showCorrectAnswerIcon =
          answer === item && isAnswerCorrect === false;
        return (
          <li
            key={index}
            className={`element-bg-${themeMode} box-shadow-${themeMode} d-flex align-center heading-s primary-text-clr-${themeMode} fw-medium ${
              isActive ? 'active' : ''
            } ${isCorrectAnswerClass ? 'correct' : ''} ${
              isWrongAnswerClass ? 'wrong' : ''
            }`}
            onClick={isAnswerSubmitted || (() => selectAnswer(item))}
          >
            <span
              className={`letters ${isActive ? 'active' : ''} ${
                isCorrectAnswerClass ? 'correct' : ''
              } ${isWrongAnswerClass ? 'wrong' : ''}`}
            >
              {letters[index]}
            </span>
            <p>{item}</p>
            {isCorrectAnswerClass && (
              <img src={iconCorrect} alt='' className='answer-icon' />
            )}
            {isWrongAnswerClass && (
              <img src={iconError} alt='' className='answer-icon' />
            )}
            {showCorrectAnswerIcon && (
              <img src={iconCorrect} alt='' className='answer-icon' />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
