import { useContext } from 'react';
import { QuizContext } from './QuizProvider';
import { motion } from 'framer-motion';

const QuizScore = () => {
  const { state, dispatch } = useContext(QuizContext);

  const { themeMode, correctAnswers, quizSection } = state;

  const { icon, title } = quizSection;

  const resetGame = () => {
    dispatch({ type: 'RESET_GAME' });
  };
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='page-container d-grid'
    >
      <h1 className={`heading-l fw-light primary-text-clr-${themeMode}`}>
        Quiz completed <br />
        <span className='fw-medium'>You scored...</span>
      </h1>
      <div
        className={`score-container element-bg-${themeMode} box-shadow-${themeMode} d-flex flex-col align-center`}
      >
        <div className='score-quiz-section d-flex align-center'>
          <img src={icon} alt='' />
          <h3 className={`heading-s fw-medium primary-text-clr-${themeMode} `}>
            {title}
          </h3>
        </div>
        <div className='score d-flex flex-col align-center'>
          <p className={`display fw-medium primary-text-clr-${themeMode}`}>
            {correctAnswers}
          </p>
          <p className={`body-m secondary-text-clr-${themeMode}`}>out of 10</p>
        </div>
      </div>
      <button
        className='reset-btn btn  box-shadow-light heading-s primary-text-clr-dark fw-medium'
        onClick={resetGame}
      >
        Play Again
      </button>
    </motion.main>
  );
};

export default QuizScore;
