import { iconError } from '../assets/images';

// eslint-disable-next-line react/prop-types
const Button = ({
  themeMode,
  userAnswer,
  validateAnswer,
  nextQuestion,
  answer,
  isAnswered,
}) => {
  return (
    <div className='btn-error-container d-flex flex-col align-center'>
      <button
        className='btn box-shadow-light heading-s primary-text-clr-dark fw-medium'
        disabled={!userAnswer ? true : false}
        onClick={
          isAnswered ? nextQuestion : () => validateAnswer(userAnswer, answer)
        }
      >
        {isAnswered ? 'Next Question' : 'Submit Answer'}
      </button>
      {!!userAnswer || (
        <div className='error-message d-flex align-center'>
          <img src={iconError} alt='' />
          <p className={`body-m error-text-clr-${themeMode}`}>
            Please select an answer
          </p>
        </div>
      )}
    </div>
  );
};

export default Button;
