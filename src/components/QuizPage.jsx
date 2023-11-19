import { useContext } from 'react';
import { QuizContext } from './QuizProvider';
import Answers from './Answers';
import Button from './Button';

const QuizPage = () => {
  const { state, dispatch } = useContext(QuizContext);
  const {
    quizSection: { questions },
    questionIndex,
    progressBar,
    questionNumber,
    themeMode,
    userAnswer,
    correctAnswers,
    isAnswerCorrect,
    isAnswered,
    isAnswerSubmitted,
  } = state;

  const { question, options, answer } = questions[questionIndex];

  const validateAnswer = (_userAnswer, _answer) => {
    const isCorrect = _userAnswer === _answer;
    dispatch({ type: 'UPDATE_IS_ANSWER_CORRECT', payload: isCorrect });
    dispatch({ type: 'UPDATE_IS_ANSWERED' });
    dispatch({ type: 'IS_ANSWER_SUBMITTED' });

    if (isCorrect) {
      let prevState = correctAnswers;
      dispatch({ type: 'NUMBER_CORRECT_ANSWERS', payload: prevState + 1 });
    }
  };

  const nextQuestion = () => {
    const prevState = progressBar;
    dispatch({ type: 'NEXT_QUESTION', payload: prevState + 10 });
  };

  return (
    <main className='page-container d-grid'>
      <section className='question-section d-flex flex-col space-between'>
        <div className='question-content d-flex flex-col'>
          <p className={`body-s italic secondary-text-clr-${themeMode}`}>
            Question {questionNumber} of 10
          </p>
          <h2 className={`heading-m fw-medium primary-text-clr-${themeMode}`}>
            {question}
          </h2>
        </div>
        <div
          className={`progress-bar-container d-flex align-center element-bg-${themeMode} box-shadow-${themeMode}`}
        >
          <div
            className='progress-bar'
            style={{ width: `${progressBar}%` }}
          ></div>
        </div>
      </section>
      <Answers
        options={options}
        themeMode={themeMode}
        dispatch={dispatch}
        userAnswer={userAnswer}
        isAnswerCorrect={isAnswerCorrect}
        answer={answer}
        isAnswerSubmitted={isAnswerSubmitted}
      />
      <Button
        themeMode={themeMode}
        dispatch={dispatch}
        userAnswer={userAnswer}
        answer={answer}
        isAnswered={isAnswered}
        validateAnswer={validateAnswer}
        nextQuestion={nextQuestion}
      />
    </main>
  );
};

export default QuizPage;
