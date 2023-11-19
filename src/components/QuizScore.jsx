import { useContext } from 'react';
import { QuizContext } from './QuizProvider';

const QuizScore = () => {
  const { state } = useContext(QuizContext);

  const { themeMode } = state;
  return (
    <main className='page-container d-grid'>
      <h1 className={`heading-l fw-light primary-text-clr-${themeMode}`}>
        Quiz completed <br />
        <span className='fw-medium'>You scored...</span>
      </h1>
      <div
        className={`score-container element-bg-${themeMode} box-shadow-${themeMode} d-flex flex-col align-center`}
      >
        <div className='score-quiz-section d-flex align-center'>
          score-container
        </div>
        <div className='score d-flex flex-col align-center'>
          <p className={`display fw-medium primary-text-clr-${themeMode}`}>8</p>
          <p className={`body-m secondary-text-clr-${themeMode}`}>out of 10</p>
        </div>
      </div>
      <button className='reset-btn btn  box-shadow-light heading-s primary-text-clr-dark fw-medium'>
        Play Again
      </button>
    </main>
  );
};

export default QuizScore;
